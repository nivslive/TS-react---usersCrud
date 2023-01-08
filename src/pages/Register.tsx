import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import RegisterData from '../API/Register';
const Register: React.FC = () => {
    const [logout, setLogout] = useState<boolean>(false);
    useEffect(() => {
        if(!logout) {
           localStorage.removeItem('user_token')
           setLogout(true) 
        }
    })
    const handleSubmit = () => {
        const r = new RegisterData
        console.log(r.send('edit', {}))
    }
    return (
        <div>
            <Form title="Cadastrar" button="Avançar" register={true}/>
            <button onClick={handleSubmit}> da</button>
        </div>
    )
}

export default Register;