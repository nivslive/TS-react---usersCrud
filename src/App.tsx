import React from 'react';
import './App.css';
import Routes from './router/Router';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import  { AuthProvider } from './context/AuthContext';
import { ChakraProvider } from '@chakra-ui/react';
import API from './API/Conf';
import AuthForm from './context/Test';

const router = createBrowserRouter(Routes);
function App() {
  return (
    <AuthProvider>
    <ChakraProvider>
      <AuthForm />
      <RouterProvider router={router} />
    </ChakraProvider>
    </AuthProvider>
  );
}

export default App;
