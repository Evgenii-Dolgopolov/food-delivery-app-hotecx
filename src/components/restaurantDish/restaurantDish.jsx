"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { Button, QuantityInput } from "../index"
import { sliceName } from "@/utils/utilities"

const menuItems = [
  {
    id: 1,
    title: "Fried Rice with Prawns and Vegetables",
    price: 150,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624",
  },
  {
    id: 2,
    title: "Pad Thai with Chicken",
    price: 120,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710",
  },
  {
    id: 3,
    title: "Green Curry with Rice",
    price: 140,
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853",
  },
  {
    id: 4,
    title: "Classic Burger with Fries",
    price: 160,
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  },
]

export default function RestaurantDish() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <div className="">
      {menuItems.map(item => (
        <div
          key={item.id}
          className="flex shadow-xl rounded-2xl border-2 border-gray-50 m-4 p-4"
        >
          <div className="max-w-24 min-h-24">
            <Image
              className="w-full h-full object-cover rounded-xl"
              src={item.image}
              alt={item.title}
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
          </div>
          <div className="flex flex-col w-full ml-6 justify-between">
            <h3
              className="text-sm font-medium whitespace-nowrap"
              title={item.title}
            >
              {sliceName(item.title, 27)}
            </h3>
            <p className="text-s text-blue-950">{item.price}THB</p>
            <div className="flex flex-row justify-between items-center">
              <QuantityInput />
              <Button>Add to Cart</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
