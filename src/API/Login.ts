import API from "./conf";

export default class Register extends API {

    send(endpoint: string, params: Object = {}, redirect: string = '/') {
        switch(endpoint) {
            case 'edit':
                this.request('test', 'POST', {}, redirect)
                break;
            case 'update':
                this.request('update', 'POST', {}, redirect)
                break;
        }
    }
}