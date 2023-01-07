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

  interface formProp {
    title: string,
    button: string,
  }
  const Form = (props: formProp) => {
    return (
        <Flex width="full" align="center" justifyContent="center">
        <Box p={2}>
          <Box textAlign="center">
            <Heading>{props.title}</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="test@test.com" />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="*******" />
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