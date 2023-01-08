import API from "./conf";

export default class LoginData extends API {

    async send(endpoint: string, params: Object = {}, redirect: string = '/') {
        switch(endpoint) {
            case 'login':
                return await this.request('login', 'POST', params, 'dashboard')
            case 'edit':
                this.request('test', 'POST', {}, redirect)
                break;
            case 'update':
                this.request('update', 'POST', {}, redirect)
                break;
        }
    }
}