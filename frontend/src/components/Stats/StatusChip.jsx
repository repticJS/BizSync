import { Chip } from '@mui/material'
import React, { useState, useEffect } from 'react'

const List = [
    {
        Status: "Draft",
        Color: "#808080"
    },
    {
        Status: "Sent",
        Color: "#0000FF"
    },
    {
        Status: "Pending",
        Color: "#FFA500"
    },
    {
        Status: "Approved",
        Color: "#008000"
    },
    {
        Status: "Overdue",
        Color: "#FF0000"
    },
    {
        Status: "Paid",
        Color: "#006400"
    },
    {
        Status: "Partially Paid",
        Color: "#90EE90"
    },
    {
        Status: "Processing",
        Color: "#800080"
    },
    {
        Status: "Cancelled",
        Color: "#808080"
    },
]

const StatusChip = ({ Status }) => {

    const [Color, setColor] = useState("black")

    useEffect(() => {

        const h = List.find((a) => Status === a.Status);
        setColor(h.Color)

    }, [Status])

  return (
    <Chip label={Status} sx={{ backgroundColor: '', color: Color, border: `1px solid ${Color}`, width: '100px' }} />
  )
}

export default StatusChip