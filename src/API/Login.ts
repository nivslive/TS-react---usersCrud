import API from "./conf";

export default class Register extends API {

    send(endpoint: string) {
        switch(endpoint) {
            case 'edit':
                this.request('test', 'POST', {})
                break;
            case 'update':
                this.request('update', 'POST', {})
                break;
        }
    }
}