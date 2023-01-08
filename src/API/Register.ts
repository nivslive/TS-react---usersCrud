import API from "./conf";

export default class RegisterData extends API {

    send(endpoint: string, params: Object = {} ) {
        switch(endpoint) {
            case 'register':
                this.request('register', 'POST', params)
                break;
            case 'edit':
                this.request('test', 'POST', params)
                break;
            case 'update':
                this.request('update', 'POST', params)
                break;
        }
    }
}