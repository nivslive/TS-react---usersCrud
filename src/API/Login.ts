import API from "./conf";

export default class Register extends API {

    send() {
        console.log(this.request('POST', {}))
    }
}