import axios, { Axios } from 'axios';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { Cookie, CookieJar } from 'tough-cookie';
import { URLSearchParams } from 'url';
import MercenariesBot from '../core';
import { DocumentId } from './document';

type Credential = {
    email: string;
    password: string;
};

export default class ApiRequest {
    public static readonly cookieJar: CookieJar = new CookieJar();

    public static async init() {
        axios.defaults.validateStatus = (status) => status >= 200 && status <= 500;
        const credential = JSON.parse(readFileSync(path.join(__dirname, '..', '..', 'credential.json'), 'utf-8')) as Credential;
        await this.login(credential.email, credential.password);
    }

    public static async login(email: string, password: string) {
        const data = await axios.get('https://www.messenger.com/', {});

        const jazoest = (data.data as string).match(/name="jazoest" value="(\d+)"/)![1];
        const lsd = (data.data as string).match(/name="lsd" value="([^"]+)"/)![1];
        const datr = (data.data as string).match(/"_js_datr","([^"]+)"/)![1];
        const initialRequestId = (data.data as string).match(/name="initial_request_id" value="([^"]+)"/)![1];
        const lgnrnd = (data.data as string).match(/name="lgnrnd" value="([^"]+)"/)![1];
        const lgnjs = (data.data as string).match(/name="lgnjs" value="([^"]+)"/)![1];

        this.cookieJar.setCookie(
            new Cookie({
                key: 'datr',
                value: datr
            }),
            'https://www.messenger.com/'
        );

        this.cookieJar.setCookie(
            new Cookie({
                key: 'wd',
                value: '727x730'
            }),
            'https://www.messenger.com/'
        );

        this.cookieJar.setCookie(
            new Cookie({
                key: 'dpr',
                value: '1.25'
            }),
            'https://www.messenger.com/'
        );

        const postBody = {
            jazoest: jazoest,
            lsd: lsd,
            initial_request_id: initialRequestId,
            timezone: -420,
            lgndim: 'eyJ3IjoxNTM2LCJoIjo4NjQsImF3IjoxNTM2LCJhaCI6ODE2LCJjIjoyNH0=', //base64 of some random ass data but whatever lol
            lgnrnd: lgnrnd,
            lgnjs: lgnjs,
            email: email,
            pass: password,
            default_persistent: ''
        };
        const result = await ApiRequest.post('https://www.messenger.com/login/password', postBody, true);
        if (result.headers['set-cookie']) {
            for (const cookie of result.headers['set-cookie']) {
                const cookieData = cookie.split(';').shift()!.split('=')!;
                if (cookieData[0] == 'c_user') MercenariesBot.userId = cookieData[1];
                this.cookieJar.setCookie(cookie, 'https://www.messenger.com');
            }
        }

        const reloadPage = await ApiRequest.get('https://www.messenger.com/');

        const DTSGInitialData = (reloadPage.data as string).match(/"DTSGInitialData",\[\],\{"token":"([^"]+)"/)![1];
        const deviceId = (reloadPage.data as string).match(/"deviceId":"([^"]+)"/)![1];
        const region = (reloadPage.data as string).match(/region=([a-zA-Z0-9]+)/)![1];

        MercenariesBot.region = region;
        MercenariesBot.dtsg = DTSGInitialData;
        MercenariesBot.deviceId = deviceId;
    }

    public static async get(url: string, ignoreRedirects: boolean = false) {
        return await axios.get(url, {
            headers: {
                Cookie: this.cookieJar.getCookieStringSync(url)
            },
            maxRedirects: ignoreRedirects ? 0 : 5
        });
    }

    public static async post(url: string, body: any, ignoreRedirects: boolean = false) {
        return axios.post(url, new URLSearchParams(body).toString(), {
            headers: {
                Cookie: this.cookieJar.getCookieStringSync(url.replace('facebook.com', 'messenger.com'))
            },
            maxRedirects: ignoreRedirects ? 0 : 5
        });
    }

    public static async postWithGraphQL(documentId: DocumentId, variables: any) {
        const content = {
            fb_dtsg: MercenariesBot.dtsg,
            doc_id: documentId,
            variables: JSON.stringify(variables)
        };
        return ApiRequest.post('https://www.messenger.com/api/graphql/', content);
    }
}
