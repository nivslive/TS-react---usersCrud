import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";

const logged = true
const Logged: Object[] = [
  {
    path: "dashboard",
    element: <div>Dashboard</div>,
  },
]
export default Logged;