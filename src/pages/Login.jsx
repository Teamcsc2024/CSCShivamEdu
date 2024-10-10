import React from 'react';
import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import axios from 'axios';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const loginUser = async (e) => {
        e.preventDefault();
        const {email, password} = data;
        try {
            const{data} = await axios.post('/login', {email, password});
            if(data.error) {
                return toast.error(data.error);
            } else {
                setData({});
                navigate('/dashboard');
            }
        } catch (error) {
            
        }
    }

    return (
        <Box maxW="md" mx="auto" mt={10} p={5} borderWidth={1} borderRadius="lg">
            <form onSubmit={loginUser}>
                <FormControl id="email" mb={4}>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
                </FormControl>
                <FormControl id="password" mb={4}>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
                </FormControl>
                <Button type="submit" colorScheme="teal" width="full">
                    Login
                </Button>
            </form>
        </Box>
    );
};

export default Login;