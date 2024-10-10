import React from 'react';
import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import axios from 'axios';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const registerUser = async (e) => {
        e.preventDefault();
        const {name, email, password} = data;
        try {
            const {data} = await axios.post('/register', {name, email, password});
            if(data.error) {
                return toast.error(data.error);
            } else {
                setData({})
                toast.success(`login successful`, data.message);
                navigate('/login');
            }
        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <Box maxW="md" mx="auto" mt={10} p={5} borderWidth={1} borderRadius="lg">
            <form onSubmit={registerUser}>
                <FormControl id="name" mb={4}>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
                </FormControl>
                <FormControl id="email" mb={4}>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
                </FormControl>
                <FormControl id="password" mb={4}>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
                </FormControl>
                <Button type="submit" colorScheme="teal" width="full">
                    Submit
                </Button>
            </form>
        </Box>
    );
};

export default Register;