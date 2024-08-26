import axios from 'axios';
import * as fs from 'fs';
import ApiRequest from '../api/api';
import { URL } from '../utils/utils';

export default class FileCdn {
    public static async uploadFileToCdn(path: string) {
        if (!fs.existsSync(path)) throw new Error(`File ${path} doesn't exist`);
        const urlParam = new URLSearchParams();
        urlParam.append('fb_dtsg', ApiRequest.apiStorage.DTSGInitialData);
        urlParam.append('jazoest', ApiRequest.apiStorage.jazoest);
        urlParam.append('lsd', ApiRequest.apiStorage.lsd);
        urlParam.append('__a', '1');

        const url = `${URL.FILE_CDN_URL}?${urlParam.toString()}`;
        const upload = await axios.post(
            url,
            {
                farr: fs.createReadStream(path)
            },
            {
                headers: {
                    Cookie: ApiRequest.getCookies(),
                    'Content-Type': 'multipart/form-data'
                }
            }
        );

        if (upload.status !== 200) throw new Error(`There was an issue uploading ${path} to cdn`);
        const json = JSON.parse((upload.data as string).substring(9));
        return json['payload']['metadata']['0'] as CdnMetadata;
    }
}

export interface CdnMetadata {
    image_id: number;
    filename: string;
    filetype: string;
    src: string;
    fbid: number;
}
