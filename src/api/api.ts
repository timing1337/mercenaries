import axios from 'axios';
import fs from 'fs'; const { readFileSync } = fs;
import path from 'path';
import { Cookie, CookieJar } from 'tough-cookie';
import { URLSearchParams } from 'url';
import { URL } from '../utils/utils';
import Logger from '../utils/log';
import { DocumentId } from './document';

type Credential = {
    email: string;
    password: string;
};

type ApiStorage = {
    jazoest: string;
    lsd: string;
    DTSGInitialData: string;
    deviceId: string;
    region: string;
    userId: string;
};



const CREDENTIAL_PATH = path.join(__dirname, '..', '..', 'credential.json');
const APPSTATE_PATH = path.join(__dirname, '..', '..', 'appstate.json');

ensureExists(CREDENTIAL_PATH, JSON.stringify({
    email: '',
    password: ''
}, null, 4));

export default class ApiRequest {
    public static logger: Logger = new Logger('Login');
    public static readonly cookieJar: CookieJar = new CookieJar();
    public static readonly apiStorage: ApiStorage = {
        jazoest: '',
        lsd: '',
        DTSGInitialData: '',
        deviceId: '',
        region: '',
        userId: ''
    };

    public static async init() {
        axios.defaults.validateStatus = (status) => status >= 200 && status <= 500;

        let appState;
        if (fs.existsSync(APPSTATE_PATH)) appState = JSON.parse(readFileSync(APPSTATE_PATH, 'utf-8'));

        const credential = JSON.parse(readFileSync(CREDENTIAL_PATH, 'utf-8')) as Credential;
        await this.login(credential.email, credential.password, appState);
    }

    public static async login(email: string, password: string, appState?:any) {
        const data = await axios.get(URL.MESSENGER_URL, {});

        ApiRequest.apiStorage.jazoest = (data.data as string).match(/name="jazoest" value="(\d+)"/)![1];
        ApiRequest.apiStorage.lsd = (data.data as string).match(/name="lsd" value="([^"]+)"/)![1];
        const datr = (data.data as string).match(/"_js_datr","([^"]+)"/)![1];
        const initialRequestId = (data.data as string).match(/name="initial_request_id" value="([^"]+)"/)![1];
        const lgnrnd = (data.data as string).match(/name="lgnrnd" value="([^"]+)"/)![1];
        const lgnjs = (data.data as string).match(/name="lgnjs" value="([^"]+)"/)![1];

        this.cookieJar.setCookie(
            new Cookie({
                key: 'datr',
                value: datr
            }),
            URL.MESSENGER_URL
        );

        this.cookieJar.setCookie(
            new Cookie({
                key: 'wd',
                value: '727x730'
            }),
            URL.MESSENGER_URL
        );

        this.cookieJar.setCookie(
            new Cookie({
                key: 'dpr',
                value: '1.25'
            }),
            URL.MESSENGER_URL
        );

        if (appState) {
            for (const cookie of appState) {
                if (cookie.name == 'c_user') ApiRequest.apiStorage.userId = cookie.value;
                if (['dpr', 'wd', 'datr'].indexOf(cookie.name) != -1) continue;
                this.cookieJar.setCookie(new Cookie({
                    key: cookie.name,
                    value: cookie.value
                }), URL.MESSENGER_URL);
            }
        } else {
            const postBody = {
                jazoest: ApiRequest.apiStorage.jazoest,
                lsd: ApiRequest.apiStorage.lsd,
                initial_request_id: initialRequestId,
                timezone: -420,
                lgndim: 'eyJ3IjoxNTM2LCJoIjo4NjQsImF3IjoxNTM2LCJhaCI6ODE2LCJjIjoyNH0=', //base64 of some random ass data but whatever lol
                lgnrnd: lgnrnd,
                lgnjs: lgnjs,
                email: email,
                pass: password,
                default_persistent: ''
            };

            const result = await axios.post(URL.LOGIN_URL, new URLSearchParams(postBody as any).toString(), {
                headers: {
                    Cookie: ApiRequest.getCookies()
                },
                maxRedirects: 0
            });

            if (result.headers['set-cookie']) {
                for (const cookie of result.headers['set-cookie']) {
                    const cookieData = cookie.split(';').shift()!.split('=')!;
                    if (cookieData[0] == 'c_user') ApiRequest.apiStorage.userId = cookieData[1];
                    this.cookieJar.setCookie(cookie, URL.MESSENGER_URL);
                }
            }
        }

        const reloadPage = await ApiRequest.get(URL.MESSENGER_URL);


        try {
            ApiRequest.apiStorage.DTSGInitialData = (reloadPage.data as string).match(/"DTSGInitialData",\[\],\{"token":"([^"]+)"/)![1];
            ApiRequest.apiStorage.deviceId = (reloadPage.data as string).match(/"deviceId":"([^"]+)"/)![1];
            ApiRequest.apiStorage.region = (reloadPage.data as string).match(/region=([a-zA-Z0-9]+)/)![1];
        } catch (error) {
            this.logger.error("There was an error in the login process, please try again later!");
            throw new Error(error + '');
        }
    }

    public static getCookies() {
        return this.cookieJar.getCookieStringSync(URL.MESSENGER_URL);
    }

    public static getCookiesObject() {
        return this.cookieJar.getCookiesSync(URL.MESSENGER_URL);
    }

    public static async get(url: string, ignoreRedirects: boolean = false) {
        return await axios.get(url, {
            headers: {
                Cookie: ApiRequest.getCookies()
            },
            maxRedirects: ignoreRedirects ? 0 : 5
        });
    }

    public static async postWithGraphQL(documentId: DocumentId, variables: any) {
        const content = {
            av: ApiRequest.apiStorage.userId,
            dpr: 1,
            fb_dtsg: ApiRequest.apiStorage.DTSGInitialData,
            jazoest: ApiRequest.apiStorage.jazoest,
            lsd: ApiRequest.apiStorage.lsd,
            doc_id: documentId,
            variables: JSON.stringify(variables),
            __a: 1,
            __jssesw: 1
        };

        return await axios.post(URL.GRAPH_QL_URL, new URLSearchParams(content as any).toString(), {
            headers: {
                Cookie: ApiRequest.getCookies(),
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-fb-lsd': ApiRequest.apiStorage.lsd
            }
        });
    }
}

function ensureExists(base: string, content = '', mask = 0o777) {
    base = path.normalize(base);
    let baseInfo = path.parse(base);
    if (baseInfo.ext != '') {
        ensureExists(baseInfo.dir);
        if (!fs.existsSync(base))
            try {
                fs.writeFileSync(base, content);
                return;
            } catch (ex) {
                return {
                    err: ex
                }
            }
        return;
    }
    if (typeof mask != 'number') {
        mask = 0o777;
    }
    try {
        fs.mkdirSync(base, {
            mode: mask,
            recursive: true
        });
        return;
    } catch (ex) {
        return {
            err: ex
        };
    }
}
