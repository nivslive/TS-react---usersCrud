import API from "./conf";

export default class DashboardData extends API {

    async send(endpoint: string, params: Object = {}, redirect: string = '/') {
        switch(endpoint) {
            case 'index':
                return await this.request('test', 'GET', params)
        }
    }
}