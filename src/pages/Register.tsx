import React from 'react';
import Form from '../components/Form';
import RegisterData from '../API/Register';
const Register: React.FC = () => {
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