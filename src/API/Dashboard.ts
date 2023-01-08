import AuthForm from "../context/Test";
import Configuration from "./Conf";

export default class DashboardData extends AuthForm {

    async send(endpoint: string, params: Object = {}, redirect: string = '/') {
        switch(endpoint) {
            case 'index':
                return await this.request('test', 'GET', params)
            case 'delete':
                return await this.request('delete', 'DELETE', params)
            case 'edit-email':
                return await this.request('edit-email', 'POST', params)
        }
    }
}