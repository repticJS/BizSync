import { Box, Button, Fade, LinearProgress, Slide, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CircleProgressBar } from '../components/Stats'

const Dashboard = () => {

  return (
    <Box sx={{ width: '100vw', height: '100vh', backgroundColor: '#f2f4f5', display: 'flex', justifyContent: 'center', paddingLeft: '100px'}}>
      
    <Stack direction="row" sx={{ paddingTop: '50px'}} gap={10}>
    <CircleProgressBar Percentage={"60"} Name="Invoices Paid" Symbol="%" />
    <CircleProgressBar Percentage={"5"} Name="Average Timeframe" Symbol="Days" />
    <CircleProgressBar Percentage={"10"} Name="Late Payments" Symbol="%" />
    </Stack>

    </Box>
  )
}

export default Dashboard