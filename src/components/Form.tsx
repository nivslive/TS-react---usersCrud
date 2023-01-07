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

interface formProp {
  title: string,
  button: string,
}

const Form = (props: formProp) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const handleSubmit: any = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      console.log(email, 'email')
      console.log(password, 'event')
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