import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import NavbarBanner from "../components/Navbar/NavbarBanner"
import { ChakraProvider } from '@chakra-ui/react'
import {Toaster} from "react-hot-toast";
import { UserContextProvider } from "../context/userContext";

const MainLayout = () => {
  return (
    <UserContextProvider>
    <ChakraProvider>
        <Navbar />
        <Toaster position='bottom-right' toastOptions={{duration: 2000}}/>
        <NavbarBanner />
        <Outlet />
    </ChakraProvider>
    </UserContextProvider>
  )
}

export default MainLayout