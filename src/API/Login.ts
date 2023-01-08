import API from "./conf";

export default class LoginData extends API {

    send(endpoint: string, params: Object = {}, redirect: string = '/') {
        switch(endpoint) {
            case 'login':
                this.request('login', 'POST', params, 'dashboard')
                break;
            case 'edit':
                this.request('test', 'POST', {}, redirect)
                break;
            case 'update':
                this.request('update', 'POST', {}, redirect)
                break;
        }
    }
}