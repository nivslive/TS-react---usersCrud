import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import Form from "../components/Form";
import Login from "../pages/Login";
import Register from "../pages/Register";

const index = {
    path: "/",
    element: (
            <div>
              <div>Test</div>
              <Link to="register">Registrar</Link>
              <Link to="login">Login</Link>
            </div>
    )
  }
const errors = {
  path: "/error",
  element: (
      <div>
          <div> Erro. Não existe essa página. Sai fora irmão.</div>
      </div>
  ),
}

const Public: Object[] = [
  index, errors,
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register/>,
  },
]

export default Public;