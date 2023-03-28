import {config} from "../libs/Configuration"
import axios from 'axios';

class BaseRepository {

    constructor(accessToken) {
        const apiConfig = {
            baseURL: config("api.baseUrl")
        };

        if (accessToken) {
            apiConfig["headers"] = { Authorization: `Bearer ${accessToken}` };
        }

        this.api = axios.create(apiConfig)
    }

    get(url, params = {}) {
        return this.api.get(url, params);
    }

    post(url, params = {}) {
        return this.api.post(url, params);
    }
}

export default BaseRepository;
