import axios from 'axios';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { Cookie, CookieJar } from 'tough-cookie';
import { URLSearchParams } from 'url';
import { URL } from '../utils/utils';
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

export default class ApiRequest {
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
        let appState = undefined;
        if (existsSync(APPSTATE_PATH)) appState = JSON.parse(readFileSync(APPSTATE_PATH, 'utf-8')) as Cookie[];
        const credential = JSON.parse(readFileSync(CREDENTIAL_PATH, 'utf-8')) as Credential;
        await this.login(credential.email, credential.password, appState);
    }

    public static async login(email: string, password: string, appState?: Cookie[]) {
        if (appState) {
            for (let el of appState) {
                const { key, value, expires, domain, path } = el;
                if (key == 'c_user') ApiRequest.apiStorage.userId = value;
                const cookie = `${key}=${value}; expires=${expires}; domain=${domain}; path=${path};`;
                this.cookieJar.setCookieSync(cookie, `https://${domain}`);
            }
        } else {
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

                    // Saving cookies for next login.
                    writeFileSync(APPSTATE_PATH, JSON.stringify(ApiRequest.getCookiesObject(), null, 3));
                }
            }
        }
        const reloadPage = await ApiRequest.get(URL.MESSENGER_URL);

        ApiRequest.apiStorage.DTSGInitialData = (reloadPage.data as string).match(/"DTSGInitialData",\[\],\{"token":"([^"]+)"/)![1];
        ApiRequest.apiStorage.deviceId = (reloadPage.data as string).match(/"deviceId":"([^"]+)"/)![1];
        ApiRequest.apiStorage.region = (reloadPage.data as string).match(/region=([a-zA-Z0-9]+)/)![1];
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
            fb_dtsg: ApiRequest.apiStorage.DTSGInitialData,
            doc_id: documentId,
            variables: JSON.stringify(variables)
        };

        return await axios.post(URL.GRAPH_QL_URL, new URLSearchParams(content).toString(), {
            headers: {
                Cookie: ApiRequest.getCookies()
            }
        });
    }
}
