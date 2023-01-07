export default class API {
    readonly url: RequestInfo | URL;
    constructor() {
        this.url = 'localhost'
    }
    request(type: any, params: any): Object {
        return fetch(this.url)
    }
}