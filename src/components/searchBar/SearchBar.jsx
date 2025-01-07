"use client"
import React, { useState, useEffect } from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"

export default function SearchBar() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        margin: "auto",
        marginBottom: "1rem",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Search..."
        variant="outlined"
        sx={{
          width: "85%",
          "& .MuiOutlinedInput-root": {
            borderRadius: "50px",
            "& fieldset": {
              borderRadius: "50px",
            },
          },
          "& .MuiInputBase-input": {
            borderRadius: "50px",
          },
        }}
      />
    </Box>
  )
}
