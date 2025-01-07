"use client"
import React, { useEffect, useState } from "react"

export default function Button({ onClick, children }) {
  const [isClient, setIsClient] = useState(false)
  // Hydration issue fix
  useEffect(() => {
    setIsClient(true)
  }, [])
  if (!isClient) return null

  const handleClick = e => {
    e.preventDefault()
    console.log("Button clicked")
  }

  return (
    <button
      onClick={handleClick}
      className="bg-addToCartBtnColor min-w-14 min-h-7 px-2 rounded-full border-solid border-1 shadow-2xl text-xs whitespace-nowrap flex items-center justify-center text-[#33426d]"
    >
      {children}
    </button>
  )
}
