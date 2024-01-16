import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { Dashboard, LoginPage } from './pages';
import { NavBar } from './components';

const App = () => {

    const [userData, setUserData] = useState({})
    const [Company, setCompany] = useState({})
    const [Companies, setCompanies] = useState([])

    async function ProcessLogin(Username, Password) {

        console.log('Username: ' + Username)
        console.log('Password: ' + Password)

        const Requestdata = {
            Username,
            Password
        }
           
        try {
            const { data } = await axios.post('http://localhost:3001/login', Requestdata);
            setUserData(data.User)
            setCompanies(data.Companies)
            return data.User
        } catch (error) {
            return error
        }
      
    }

   return (
    <BrowserRouter>
    
    <Box sx={{ }}>
        <Routes>
            <Route path="/" exact element={<LoginPage ProcessLogin={ProcessLogin} />} />
        </Routes>
        
        {userData.ID && <Box>
        <NavBar setCompany={setCompany} Company={Company} Companies={Companies} />
        <Routes>
            <Route path="/dashboard" exact element={<Dashboard />} />
        </Routes>    
        </Box>}
        
    </Box>
    </BrowserRouter>
   )
}

export default App

