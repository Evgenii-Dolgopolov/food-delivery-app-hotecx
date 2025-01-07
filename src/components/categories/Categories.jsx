"use client"
import React from "react"
import Image from "next/image"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid2"

export default function Categories() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }))

  return (
    <div className="flex-grow min-h-[230px] bg-gradient-to-r from-[#ffe1b9] to-[#e2e2fa] my-4 mx-4 rounded-3xl p-2 pt-4 pb-6">
      <h1 className="text-2xl font-semibold mb-4 ml-4">Categories</h1>

      <div className="grid grid-cols-4 gap-2">
        {[
          "Food",
          "Drink",
          "Snack",
          "Bakery",
          "Cake",
          "Seafood",
          "Vegan",
          "Menu",
        ].map(category => (
          <div
            className="flex flex-col items-center text-center"
            key={category}
          >
            <Image
              className="w-16 h-16 rounded-full object-cover mb-2"
              src={`https://images.unsplash.com/photo-1551782450-a2132b4ba21d`} // Replace with actual image path
              alt={category}
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
            <h2>{category}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}
