import { Backdrop, Box, Button, Chip, CircularProgress, Fade, LinearProgress, Slide, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import StatusChip from './StatusChip'

// ID
// Client
// Total
// Status

const Test = [
  {
    ID: '123',
    Client: 'Apple',
    Total: 100,
    Status: "Pending"
  },
  {
    ID: '123',
    Client: 'Apple',
    Total: 100,
    Status: "Paid"
  }
]

const ListOfInvoices = () => {
  return (
    <Stack sx={{ width: '620px', height: '500px', backgroundColor: '#fff', borderRadius: '20px', display: 'flex', alignItems: 'center', padding: '20px'}}>
    <Typography sx={{ fontFamily: 'monospace', fontSize: '20px'}}>Recent Invoices</Typography>

    <Stack sx={{ width: '600px', height: '50px', backgroundColor: '#f2f4f5', borderTopRightRadius: '5px', borderTopLeftRadius: '5px', display: 'flex', alignItems: 'center', borderBottom: '1px solid black'}} direction="row">
    
    <Box sx={{ width: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <Typography sx={{ fontFamily: 'monospace', fontSize: '20px'}}>ID</Typography>
    </Box>
    <Box sx={{ width: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <Typography sx={{ fontFamily: 'monospace', fontSize: '20px'}}>Client</Typography>
    </Box>
    <Box sx={{ width: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <Typography sx={{ fontFamily: 'monospace', fontSize: '20px'}}>Total</Typography>
    </Box>
    <Box sx={{ width: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <Typography sx={{ fontFamily: 'monospace', fontSize: '20px'}}>Status</Typography>
    </Box>

    </Stack>

    {Test.map((item, index) => (
      
      <Stack sx={{ width: '600px', height: '50px', backgroundColor: '#fff', borderTopRightRadius: '5px', borderTopLeftRadius: '5px', display: 'flex', alignItems: 'center', borderBottom: '1px solid black'}} direction="row">
    
      <Box sx={{ width: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Typography sx={{ fontFamily: 'monospace', fontSize: '20px'}}>{item.ID}</Typography>
      </Box>
      <Box sx={{ width: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Typography sx={{ fontFamily: 'monospace', fontSize: '20px'}}>{item.Client}</Typography>
      </Box>
      <Box sx={{ width: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Typography sx={{ fontFamily: 'monospace', fontSize: '20px'}}>£{item.Total}</Typography>
      </Box>
      <Box sx={{ width: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <StatusChip Status={item.Status} />
      </Box>
  
      </Stack>
    ))}

    </Stack>
  )
}

export default ListOfInvoices 