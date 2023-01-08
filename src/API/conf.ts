
export default class API {
    readonly url: RequestInfo | URL;
    constructor() {
        this.url = 'http://127.0.0.1/api/'
    }
    async request(uri: string, type: string, params: Object, redirect: string | null = null ): Promise<any>{
        const userToken = localStorage.getItem('user_token');
        
        const conf: any =  {
            mode: 'cors', 
            cache: 'no-cache', 
            headers: {
               'Authorization': userToken !== null ? `Bearer ${userToken}` : '', 
               'Content-Type': 'application/json',
           // 'Content-Type': 'application/x-www-form/urlencoded'
           }, 
           method: type, 
           body: JSON.stringify(params) 
        }
        if(type === 'GET') delete conf.body
        return await fetch(this.url + uri, conf)
            .then((response) => response.json())
            .then((data) => {
                console.log(data); 
                console.log(data.status === 'error')
                if(data.status === 'error') 
                    return
                if(data.authorization !== undefined) 
                    localStorage.setItem('user_token', data.authorization.token);
                if(redirect !== null) 
                    window.location.pathname = redirect
                return data
            });
    }
}