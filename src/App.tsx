import React from 'react';
import './App.css';
import Routes from './router/Router';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import { ChakraProvider } from '@chakra-ui/react';

const test = () => {
  console.log(Routes)
}
const router = createBrowserRouter(Routes);
function App() {
  return (
    <AuthProvider>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
    </AuthProvider>
  );
}

export default App;
