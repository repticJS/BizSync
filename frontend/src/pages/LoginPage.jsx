import { Box, Button, Fade, LinearProgress, Slide, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { DarkDarkGreen, DarkGreen, LightGreen, Name, backgroundColor, brightColor, darkerColor, washedColor } from '../utils/Constants';
import { Language, Light, Password, PasswordRounded } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';

import BackgroundVideo from '../Assets/BackgroundAnimation.mp4'
import SVG from '../Assets/Graphenelogo.svg'
import Logo from '../Assets/Logo.png'

const LoginPage = ({ ProcessLogin }) => {

  const Navigate = useNavigate();

  const [UsernameEntry, setUsernameEntry] = useState("")
  const [UsernameError, setUsernameError] = useState(false)
  const [UsernameErrorText, setUsernameErrorText] = useState("")
  
  const [PasswordEntry, setPasswordEntry] = useState("")
  const [PasswordError, setPasswordError] = useState(false)
  const [PasswordErrorText, setPasswordErrorText] = useState("")

  const [Error, setError] = useState(false)

  return (
    <Box sx={{ height: '100vh', width: '100vw'}}>
      
      <video src={BackgroundVideo} autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover'}} />
      <Box sx={{ position: 'absolute', width: '100vw', height: '100vh', top: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      
      <Stack gap={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* <img src={SVG} style={{ width: '300px'}} /> */}
        {/* <Typography sx={{ fontFamily: 'monospace', fontSize: '50px', color}}>BizSync</Typography> */}
        
        <Stack sx={{ backgroundColor: '#fff', width: '450px', height: '450px', borderRadius: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center'}} gap={3}>

        <Stack gap={2}>
        <TextField
          id="filled-password-input"
          label="Username"
          type="text"
          autoComplete="current-password"
          variant="outlined"
          required
          error={UsernameError}
          helperText={UsernameErrorText}
          sx={{ width: '400px'}}
          onChange={(e) => {
            setUsernameEntry(e.target.value)
            setUsernameError(false)
            setUsernameErrorText("")
          }}
          onBlur={() => {
            if(UsernameEntry === "") {
              setUsernameError(true)
              setUsernameErrorText("Username is mandatory")
            }
          }}
        />

        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          required
          error={PasswordError}
          helperText={PasswordErrorText}
          sx={{ width: '400px'}}
          onChange={(e) => {
            setPasswordEntry(e.target.value)
            setPasswordError(false)
            setPasswordErrorText("")
          }}
          onBlur={() => {
            if(PasswordEntry === "") {
              setPasswordError(true)
              setPasswordErrorText("Password is mandatory")
            }
          }}
        />

        
        </Stack>

          <Button variant='contained' sx={{ backgroundColor: '#000b3b', ":hover": { backgroundColor: '#000b3b'}, width: '400px', height: '50px'}} onClick={async() => {

            if(UsernameEntry === "") {
              setUsernameError(true)
              setUsernameErrorText("Username is mandatory")
            } else if(PasswordEntry === "") {
              setPasswordError(true)
              setPasswordErrorText("Username is mandatory")
            } else {
              const h = await ProcessLogin(UsernameEntry, PasswordEntry)
              if(h.ID) {
                Navigate('/dashboard')
              } else {
                setError(true)
              }
            }

          }}>Login
          </Button>
          {Error === true && <Typography sx={{ fontFamily: 'monospace', fontSize: '15px', color: 'red'}}>Incorrect username or password.</Typography>}
        </Stack>

       </Stack>
      </Box>
    </Box>
  )
}

export default LoginPage