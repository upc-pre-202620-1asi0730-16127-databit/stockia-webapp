import axios from 'axios';

const platformApi = import.meta.env.VITE_STOCKIA_API_URL;

/**
 * Shared HTTP client for the StockIA API.
 */
export class BaseApi {
    #http;

    constructor() {
        this.#http = axios.create({
            baseURL: platformApi,
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        });
    }

    get http() {
        return this.#http;
    }
}