import { Backdrop, Box, Button, CircularProgress, Fade, LinearProgress, Slide, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'


const Loader = ({ Loading }) => { 
  return (
    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={Loading}
        >
    <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default Loader