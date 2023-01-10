//import AuthForm from "../context/Test";
import Configuration from "./Conf";

export default class LoginData extends Configuration {

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