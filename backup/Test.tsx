/*import React from "react";
import { AuthContext } from "./AuthContext";

class AuthForm extends React.Component {
    readonly url: RequestInfo | URL;
  constructor(props?: any) {
        super(props)
        this.url = 'http://127.0.0.1/api/'
      // ...
  }
  static contextType = AuthContext

  componentDidUpdate() {
    console.log(this.context, 'test')
    // Access the 'setAuth' function here
  }
  async request(uri: string, type: string, params: Object, redirect: string | null = null ): Promise<any>{
    const userToken = localStorage.getItem('user_token');
    
    const conf: any =  {
        mode: 'cors', 
        cache: 'no-cache', 
        headers: {
           'Authorization': userToken !== null ? `Bearer ${userToken}` : '', 
           'Accept': 'application/json',
           'Content-Type': 'application/json',
       // 'Content-Type': 'application/x-www-form/urlencoded'
       }, 
       method: type, 
       body: JSON.stringify(params) 
    }
    if(userToken === null) delete conf.headers.Authorization
    if(type === 'GET') delete conf.body
    console.log(conf)
    return await fetch(this.url + uri, conf)
        .then((response) => response.json())
        .then((data) => {
            console.log(data); 
            if(data.status === 'error') 
                return
            if(data.authorization !== undefined) 
                localStorage.setItem('user_token', data.authorization.token);
            if(redirect !== null) 
                this.privileges(Number(data.user.privilege === undefined ? 2 : data.user.privilege), redirect)
            return data
        });
}
privileges(data: number, redirect: string | null) {
    switch(data) {
        // Nenhum privilégio
        case 0:
            this.forceLogout()
            window.location.pathname = '/error'
            break;
        // Possibilidade de entrar no Dashboard
        case 1:
            window.location.pathname =  redirect !== null ? redirect : '/login'
            break;
        case 2:
            window.location.pathname =  '/login'
            break;
    }
}
forceLogout() {
    return localStorage.removeItem('user_token')
}
  render() {
    return <></>;
  }
}

export default AuthForm;*/