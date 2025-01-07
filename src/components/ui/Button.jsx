"use client"
import React from "react"

export default function Button({ onClick, children = "+ Add" }) {
  
  const handleClick = (e) => {
    e.preventDefault()
    console.log("+ Add btn clicked")
  }
  return (
    <button
      onClick={handleClick}
      className="bg-addToCartBtnColor w-14 h-7 rounded-full border-solid border-1 shadow-2xl text-xs">
      {children}
    </button>
  )
}