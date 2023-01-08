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
  } from '@chakra-ui/react'
import DashboardData from '../API/Dashboard';

const Dashboard: React.FC = () => {
    const [data, setData] = useState<any>([]);
    const dashboard = new DashboardData
    const showUser: any  = async (id: any) => {
        await dashboard.send('show', {'id': id})    
    }
    const deleteUser: any  = async (id: any) => {
        await dashboard.send('delete', {'id': id}).then( async () => {
            setData(await dashboard.send('index'))
        }) 
    }
    const handleKeyPress = async (event:any, id: any) => {
        if(event.key === 'Enter') {
            await dashboard.send('edit-email', {'id': id, 'email': event.target.value})   
        }
      }
    useEffect(() => {
        (async function() { 
            if(data.length !== 0) return
            setData(await dashboard.send('index'))
        })()
       console.log(data, 'data')
    })
    return (
            <TableContainer>
            <Table variant='simple'>
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
                        <Td><Input defaultValue={d.email} onKeyPress={(event) => handleKeyPress(event, d.id)} name="email" type="email" placeholder="test@test.com" /></Td>
                        <Td> <Select>
                                <option value='0' selected={d.privilege === 0 ? true : false}>Convidado</option>
                                <option value='1' selected={d.privilege === 0 ? false : true }>Admin</option>
                            </Select>
                        </Td>
                        <Td>
                            <Button bg="#000" color="#fff" onClick={() => showUser(d.id)}>Mostrar</Button>
                            <Button bg="#000" color="#fff" onClick={() => deleteUser(d.id)}> X </Button>
                        </Td>
                    </Tr>
                )})}
                </Tbody>
            {/*    <Tfoot>
                <Tr>
                    <Th>Lista de Usuarios</Th>
                </Tr>
                </Tfoot>*/}
            </Table>
            </TableContainer>
    )
}

export default Dashboard;