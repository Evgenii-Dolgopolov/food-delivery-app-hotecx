"use client"
import React, { useState } from "react"
import {
  SearchBar,
  Banner,
  Categories,
  Recommended,
  MenuItem,
} from "@/components"

export default function Home() {
  const [isPromotional, setIsPromotional] = useState(false)

  return (
    <>
      <SearchBar />
      <Banner />
      <MenuItem isPromotional={true} />
      <MenuItem isPromotional={false} />
      <Categories />
      <Recommended />
    </>
  )
}
