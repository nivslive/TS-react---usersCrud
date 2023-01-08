import API from "./conf";

export default class RegisterData extends API {

    send(endpoint: string, params: Object = {}, redirect: string = '/') {
        switch(endpoint) {
            case 'register':
                this.request('register', 'POST', params, 'login')
                break;
            case 'edit':
                this.request('test', 'POST', params, redirect)
                break;
            case 'update':
                this.request('update', 'POST', params, redirect)
                break;
        }
    }
}