import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { LoginPage } from './pages';

const App = () => {

   return (
    <BrowserRouter>
    
    <Box sx={{ }}>
        <Routes>
            <Route path="/" exact element={<LoginPage />} />
        </Routes>
    </Box>
    </BrowserRouter>
   )
}

export default App

