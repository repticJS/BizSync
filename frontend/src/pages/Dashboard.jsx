import { Box, Button, Fade, LinearProgress, Slide, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CircleProgressBar, ListOfInvoices } from '../components/Stats'

const Dashboard = () => {

  return (
    <Box sx={{ width: '100vw', height: '100vh', backgroundColor: '#f2f4f5', display: 'flex', justifyContent: 'center', paddingLeft: '150px'}}>

    <Stack gap={2}>

    <Stack direction="row" sx={{ paddingTop: '50px'}} gap={10}>
    <CircleProgressBar Percentage={"60"} Name="Invoices Paid" Symbol="%" />
    <CircleProgressBar Percentage={"5"} Name="Average Timeframe" Symbol="Days" />
    <CircleProgressBar Percentage={"10"} Name="Late Payments" Symbol="%" />
    <CircleProgressBar Percentage={"1"} Name="Early Payments" Symbol="%" />
    </Stack>

    <ListOfInvoices />
    </Stack>  
    
    </Box>
  )
}

export default Dashboard