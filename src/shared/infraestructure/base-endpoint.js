/**
 * Standard CRUD operations over one REST resource of the StockIA API.
 */
export class BaseEndpoint {
    constructor(baseApi, endpointPath) {
        this.http = baseApi.http;
        this.endpointPath = endpointPath;
    }

    getAll(params = {}) {
        return this.http.get(this.endpointPath, { params });
    }

    getById(id) {
        return this.http.get(`${this.endpointPath}/${id}`);
    }

    create(resource) {
        return this.http.post(this.endpointPath, resource);
    }

    update(id, resource) {
        return this.http.put(`${this.endpointPath}/${id}`, { ...resource, id });
    }

    delete(id) {
        return this.http.delete(`${this.endpointPath}/${id}`);
    }
}