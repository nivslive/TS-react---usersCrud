import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import RegisterData from '../API/Register';
import observeAuth from '../context/Auth';
const Register: React.FC = () => {
    observeAuth()
    const [logout, setLogout] = useState<boolean>(false);
    useEffect(() => {
        if(!logout) {
           localStorage.removeItem('user_token')
           setLogout(true) 
        }
    })


    return (
        <div>
            <Form title="Cadastrar" button="Avançar" register={true}/>
        </div>
    )
}

export default Register;