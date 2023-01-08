
export default class API {
    readonly url: RequestInfo | URL;
    constructor() {
        this.url = 'http://127.0.0.1/api/'
    }
    async request(uri: string, type: string, params: Object, redirect: string): Promise<any>{
        return await fetch(this.url + uri,  {
             mode: 'cors', 
             cache: 'no-cache', 
             headers: {
                'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form/urlencoded'
            }, 
            method: type, 
            body: JSON.stringify(params) 
        })
            .then((response) => response.json())
            .then((data) => {console.log(data); window.location.pathname = redirect});
    }
}