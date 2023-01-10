import ObserveAuth from "../context/Auth";
import { AuthContext } from "../context/AuthContext";
import React from "react";
import Configuration from "./Conf";
import AuthForm from "../context/Test";

export default class RegisterData extends AuthForm {
    send(endpoint: string, params: Object = {}, redirect: string = '/') {
        switch(endpoint) {
            case 'register-dashboard':
                return this.request('register', 'POST', params, 'dashboard');
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