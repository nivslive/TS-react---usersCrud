import React from 'react'
import Form from '../components/Form'

export default function Login() {
    return (
        <div>
            <Form title="Login" button="Entrar" register={false}/>
        </div>
    )
}