import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { Dashboard, LoginPage } from './pages';
import { Loader, NavBar } from './components';

const App = () => {

    const [userData, setUserData] = useState({})
    const [Company, setCompany] = useState({})
    const [Companies, setCompanies] = useState([])

    const [Loading, setLoading] = useState(false)

    useEffect(() => {

        console.log(Company)

    }, [Company])
    

    async function ProcessLogin(Username, Password) {

        setLoading(true)

        console.log('Username: ' + Username)
        console.log('Password: ' + Password)

        const Requestdata = {
            Username,
            Password
        }
           
        try {
            const { data } = await axios.post('http://localhost:3001/AccountManagement/Login', Requestdata);
            setUserData(data.User)
            setCompanies(data.Companies)
            setLoading(false)
            return data.User
        } catch (error) {
            return error
        }
      
    }

   return (
    <BrowserRouter>
    
    <Box sx={{ }}>
    <Loader Loading={Loading} />
        <Routes>
            <Route path="/" exact element={<LoginPage ProcessLogin={ProcessLogin} setLoading={setLoading} />} />
            <Route path="/dashboard" exact element={<Dashboard setLoading={setLoading} />} />
        </Routes>
        
        {userData.ID && <Box>
        <NavBar setCompany={setCompany} Company={Company} Companies={Companies} />
        <Routes>
            <Route path="/dashboard" exact element={<Dashboard setLoading={setLoading} />} />
        </Routes>    
        </Box>}
        
    </Box>
    </BrowserRouter>
   )
}

export default App

