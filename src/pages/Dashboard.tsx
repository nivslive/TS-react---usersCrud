import React, { useEffect, useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
  } from '@chakra-ui/react'
import DashboardData from '../API/Dashboard';

const Dashboard: React.FC = () => {
    const [data, setData] = useState<any>([]);
    const dashboard = new DashboardData
    const showUser: any  = async (id: any) => {
        await dashboard.send('show', {'id': id})    
    }
    useEffect(() => {
        async function fetchingData() { 
            if(data.length !== 0) return
            setData(await dashboard.send('index'))
        }
        fetchingData()
       console.log(data, 'data')
    })
    return (
            <TableContainer>
            <Table variant='simple'>
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>Email</Th>
                </Tr>
                </Thead>
                <Tbody>
                {data.map((d: any) => { return (
                    <Tr>
                        <Td>{d.email}</Td>
                        <Td>{d.name}</Td>
                        <Td><Button onClick={() => showUser(d.id)}>a</Button></Td>
                    </Tr>
                )})}
                </Tbody>
                <Tfoot>
                <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                </Tr>
                </Tfoot>
            </Table>
            </TableContainer>
    )
}

export default Dashboard;