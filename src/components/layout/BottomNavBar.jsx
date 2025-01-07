"use client"
import React, { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Box from "@mui/material/Box"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"

export default function BottomNavBar() {
  const router = useRouter()
  const pathname = usePathname()
  const [isClient, setIsClient] = useState(false)

  const getValueFromPath = (path) => {
    const routes = {
      "/home": 0,
      "/menu": 1,
      "/cart": 2,
      "/my-order": 3
    } 
    return routes[path] ?? 0
  }

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <Box
      sx={{
        width: 1,
        position: "fixed",
        bottom: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      <BottomNavigation
        sx={{
          backgroundColor: "#21356f",
          color: "#fff",
          minHeight: "10vh",
          width: "100%",
        }}
        showLabels
        value={getValueFromPath(pathname)}
        onChange={(event, newValue) => {
          const routes = ["/home", "/menu", "/cart", "/my-order"]
          router.push(routes[newValue])
        }}
      >
        <BottomNavigationAction sx={{ color: "inherit" }} label="Home" />
        <BottomNavigationAction sx={{ color: "inherit" }} label="Menu" />
        <BottomNavigationAction sx={{ color: "inherit" }} label="Cart" />
        <BottomNavigationAction sx={{ color: "inherit" }} label="My Order" />
      </BottomNavigation>
    </Box>
  )
}
