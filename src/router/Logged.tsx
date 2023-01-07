import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const Logged: Object[] = [
  {
    path: "dashboard",
    element: <Dashboard/>,
  },
]
export default Logged;