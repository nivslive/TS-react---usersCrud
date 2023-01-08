import React, { useEffect, useState } from 'react'
import Form from '../components/Form'
import ObserveAuth from '../context/Auth';

export default function Login() {
    ObserveAuth()
    const [logout, setLogout] = useState<boolean>(false);
    useEffect(() => {
        if(logout) {
           localStorage.removeItem('user_token')
           setLogout(true) 
        }
    })
    return (
        <div>
            <Form title="Login" button="Entrar" register={false}/>
        </div>
    )
}