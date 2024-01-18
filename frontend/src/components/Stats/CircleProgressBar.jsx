import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Fade, FormControl, InputLabel, LinearProgress, MenuItem, Select, Slide, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const CircleProgressBar = ({ Percentage, Name, Symbol }) => {
  return (
    <Stack sx={{ width: '250px', height: '300px', backgroundColor: '#fff', borderRadius: '20px', display: 'flex', alignItems: 'center', padding: '20px'}}>

    <CircularProgressbar
        value={Percentage}
        text={`${Percentage} ${Symbol}`}
        circleRatio={0.75}
        styles={buildStyles({
        rotation: 1 / 2 + 1 / 8,
        strokeLinecap: "butt",
        trailColor: "#eee"
        })}
    />

    <Typography sx={{ fontFamily: 'monospace', fontSize: '20px'}}>{Name}</Typography>

    </Stack>
  )
}

export default CircleProgressBar

// https://assets-global.website-files.com/637e14518f6e3b2a5c392294/64380ee193043207c9001aac_13%20exec%20-%202.webp