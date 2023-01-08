import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Flex,
    Box,
    Heading,
    Button,
  } from '@chakra-ui/react'
import React, { SetStateAction, useState } from 'react'
import LoginData from '../API/Login';
import RegisterData from '../API/Register';

interface formProp {
  title: string,
  button: string,
  register: boolean
}

const Form = (props: formProp) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const handleSubmit: any = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      if(props.register) {
        const register = new RegisterData;
        register.send('register', {'name': name, 'email': email, 'password': password})
      } else {
        const login = new LoginData;
        login.send('login', {'email': email, 'password': password})
      }
      console.log(email, 'email')
      console.log(password, 'event')
      console.log(name, 'name')
    }
    return (
        <Flex width="full" align="center" justifyContent="center">
        <Box p={2}>
          <Box textAlign="center">
            <Heading>{props.title}</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input onChange={e => setEmail(String(e.target.value))} name="email" type="email" placeholder="test@test.com" />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel>Password</FormLabel>
                <Input onChange={e => setPassword(String(e.target.value))} name="password" type="password" placeholder="*******" />
              </FormControl>
              { props.register && (
                <FormControl mt={6}>
                <FormLabel>Nome</FormLabel>
                <Input onChange={e => setName(String(e.target.value))} name="name" type="name" placeholder="name" />
              </FormControl>
              )}
              <Button width="full" mt={4} type="submit">
                { props.button }
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    )
  }

  export default Form;