export default class API {
    readonly url: RequestInfo | URL;
    constructor() {
        this.url = 'http://127.0.0.1/api/'
    }
    async request(uri: string, type: string, params: any): Promise<any>{
        return await fetch(this.url + uri)
                        .then((response) => response.json())
                        .then((data) => console.log(data));
    }
}