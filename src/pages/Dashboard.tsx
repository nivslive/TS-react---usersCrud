import React, { useEffect, useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    // Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    Input,
    Select,
    Tfoot,
  } from '@chakra-ui/react'
import DashboardData from '../API/Dashboard';
import ObserveAuth from '../context/Auth';
import RegisterData from '../API/Register';

const Dashboard: React.FC = () => {
    ObserveAuth()
    const [data, setData] = useState<any>([]);
    const dashboard = new DashboardData
    const user = new RegisterData
    const showUser: any  = async (id: any) => {
        await dashboard.send('show', {'id': id})    
    }
    const deleteUser: any  = async (id: any) => {
        await dashboard.send('delete', {'id': id}).then( async () => {
            setData(await dashboard.send('index'))
        }) 
    }
    
    const [newUserName, setNewUserName] = useState<any>('');
    const [newUserEmail, setNewUserEmail] = useState<any>('');
    const [newUserPassword, setNewUserPassword] = useState<any>('');
    const handleNewUser: any = async () => {
        await user.send
                ('register-dashboard', {
                    'name': newUserName, 
                    'password': newUserPassword, 
                    'email': newUserEmail, 
                    'privilege': '0'
                    }
                )
    }
    
    const handleKeyPress = async (event:any, id: any, keyClass: any) => {
        const element = document.querySelector<any>(`.email-${keyClass}`)
        element.style.background = '#d9d9ff'
        console.log(event.key, 'key')
        if(event.key === 'Enter') {
            element.style.background = 'white'
            await dashboard.send('edit-email', {'id': id, 'email': event.target.value})   
        }
      }
    useEffect(() => {
        
        // if(context.auth) {
        //     window.location.pathname = '/login' 
        // }
        (async function() { 
            if(data.length !== 0) return
            setData(await dashboard.send('index'))
        })()
       console.log(data, 'data')
    })
    return (
            <TableContainer>
            <Table variant='simple' size='sm' display='flex' alignItems='center' flexDirection='column' m='auto'>
                <TableCaption>Lista de Usuários: JOB TEST</TableCaption>
                <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>Email</Th>
                    <Th>Privilégio</Th>
                    <Th>Opções</Th>
                </Tr>
                </Thead>
                <Tbody>
                {data.map((d: any, k: number) => { return (
                    <Tr key={k}>
                        <Td>{d.name}</Td>
                        <Td><Input className={`email-${k}`} 
                                    defaultValue={d.email} 
                                    onKeyPress={(event) => handleKeyPress(event, d.id, k)} 
                                    name="email" type="email" placeholder="test@test.com" /></Td>
                        <Td> <Select>
                                <option value='0' selected={d.privilege === 0 ? true : false}>Convidado</option>
                                <option value='1' selected={d.privilege === 0 ? false : true }>Admin</option>
                            </Select>
                        </Td>
                        <Td>
                            {/*<Button bg="#000" color="#fff" onClick={() => showUser(d.id)}>Mostrar</Button>
                            */}
                            <Button bg="#000" color="#fff" onClick={() => deleteUser(d.id)}> X </Button>
                        </Td>
                    </Tr>
                )})}
                </Tbody>    
                        <Tfoot bg="#000"  p="3" width='100%' display='flex' alignItems='center' flexDirection='row' m='auto'>
                            <Input m="3" name="name" type="name" placeholder="Digite seu nome" onChange={(e) => {setNewUserName(e.target.value)}} />
                            <Input m="3" name="email" type="email" placeholder="email@email.com"onChange={(e) => {setNewUserEmail(e.target.value)}} />
                            <Input m="3" name="password" type="password" placeholder="*******" onChange={(e) => {setNewUserPassword(e.target.value)}} />
                            <Button m="3" bg="#fff" color="#000" onClick={handleNewUser}>Criar</Button>
                        </Tfoot>

            </Table>
            </TableContainer>
    )
}

export default Dashboard;