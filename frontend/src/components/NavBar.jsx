import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Fade, FormControl, InputLabel, LinearProgress, MenuItem, Select, Slide, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Dashboard, Headset, ExpandMore, People, Description, Category, Settings, AccountBalanceWallet } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';

const CompanyOptions = [
    {
      Name: 'Dashboard',
      Icon: <Dashboard sx={{ fontFamily: 'monospace', fontSize: '20px', color: 'black'}}/>,
      Route: '/dashboard',
      Status: true
    },
    {
      Name: 'Settings',
      Icon: <Settings sx={{ fontFamily: 'monospace', fontSize: '20px', color: 'black'}}/>,
      Route: '/Settings',
      Status: true
    },
    {
      Name: 'Staff',
      Icon: <People sx={{ fontFamily: 'monospace', fontSize: '20px', color: 'black'}}/>,
      Route: '/Staff',
      Status: true
    }
]

const ClientOptions = [
    {
        Name: 'Clients',
        Icon: <Headset sx={{ fontFamily: 'monospace', fontSize: '20px', color: 'black'}}/>,
        Route: '/Clients',
        Status: true
    },
    {
      Name: 'Products ',
      Icon: <Category sx={{ fontFamily: 'monospace', fontSize: '20px', color: 'black'}}/>,
      Route: '/Products',
      Status: true
  },
]

const CreateOptions = [
    {
      Name: 'Invoices',
      Icon: <Description sx={{ fontFamily: 'monospace', fontSize: '20px', color: 'black'}}/>,
      Route: '/Invoices',
      Status: true
    },
    {
      Name: 'Expenses',
      Icon: <AccountBalanceWallet sx={{ fontFamily: 'monospace', fontSize: '20px', color: 'black'}}/>,
      Route: '/Expenses',
      Status: true
  }
]



const NavBar = ({ setCompany, Company, Companies }) => {

  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {

    setCompany(Companies[0])

  }, [])
    
  return (
    <Stack sx={{ width: '300px', height: '100vh', backgroundColor: '#ffffff', position: 'fixed', top: 0, left: 0}}>

    <Box sx={{ height: '150px', width: '300px', backgroundColor: '', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px'}}>
    <img src={Company.Logo} style={{ height: '150px', width: '300px', objectFit: 'contain'}} />
    </Box>

    <Accordion sx={{ backgroundColor: '#fff', outline: '1px solid #fff', border: '1px solid #fff'}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
        >
        Select Your Company
        </AccordionSummary>
        <AccordionDetails>
          <Stack gap={1}>
          {Companies.map((item, index) => (
            <Stack direction="row" sx={{ height: '50px', width: '250px', backgroundColor: `${Company === item ? "#CAC9C9" : ""}`, borderRadius: '5px', display: 'flex', alignItems: 'center', paddingLeft: '20px', ":hover": { backgroundColor: '#CAC9C9', borderRadius: '5px', cursor: 'pointer'}, overflow: 'hidden' }} gap={2} onClick={() => setCompany(item)}>
            <img src={item.Logo} style={{ height: '50px', width: '50px', objectFit: 'contain'}} />
            <Typography sx={{ fontFamily: 'monospace', fontSize: '20px', color: 'black'}}>{item.Name}</Typography>
        </Stack>          ))}
          </Stack>
        </AccordionDetails>
    </Accordion>
    
    <Stack sx={{ borderBottom: '1px solid black'}}>
    {CompanyOptions.map((item, index) => (
        <Box>
          {item.Status === true &&
          <Box sx={{ width: '300px', height: '50px', ":hover": { backgroundColor: '#CAC9C9', borderRadius: '', cursor: 'pointer'}, backgroundColor: `${path === item.Route ? '#CAC9C9' : ''}`}}>
          <Stack direction="row" sx={{ height: '50px', width: '300px', backgroundColor: '', display: 'flex', alignItems: 'center', paddingLeft: '20px'}} gap={2}>
          {item.Icon} <Typography sx={{ fontFamily: 'monospace', fontSize: '20px', color: 'black'}}>{item.Name}</Typography>
          </Stack>
          </Box>}
        </Box>
    ))}
    </Stack>
    <Stack sx={{ borderBottom: '1px solid black'}}>
    {ClientOptions.map((item, index) => (
        <Box>
          {item.Status === true &&
          <Box sx={{ width: '300px', height: '50px', ":hover": { backgroundColor: '#CAC9C9', borderRadius: '', cursor: 'pointer'}, backgroundColor: `${path === item.Route ? '#CAC9C9' : ''}`}}>
          <Stack direction="row" sx={{ height: '50px', width: '300px', backgroundColor: '', display: 'flex', alignItems: 'center', paddingLeft: '20px'}} gap={2}>
          {item.Icon} <Typography sx={{ fontFamily: 'monospace', fontSize: '20px', color: 'black'}}>{item.Name}</Typography>
          </Stack>
          </Box>}
        </Box>
    ))}
    </Stack>
    <Stack>
    {CreateOptions.map((item, index) => (
        <Box>
          {item.Status === true &&
          <Box sx={{ width: '300px', height: '50px', ":hover": { backgroundColor: '#CAC9C9', borderRadius: '', cursor: 'pointer'}, backgroundColor: `${path === item.Route ? '#CAC9C9' : ''}`}}>
          <Stack direction="row" sx={{ height: '50px', width: '300px', backgroundColor: '', display: 'flex', alignItems: 'center', paddingLeft: '20px'}} gap={2}>
          {item.Icon} <Typography sx={{ fontFamily: 'monospace', fontSize: '20px', color: 'black'}}>{item.Name}</Typography>
          </Stack>
          </Box>}
        </Box>
    ))}
    </Stack>

    </Stack>
  )
}

export default NavBar