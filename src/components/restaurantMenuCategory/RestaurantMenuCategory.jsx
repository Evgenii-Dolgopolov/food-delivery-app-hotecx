"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"

export default function RestaurantMenuCategory() {
  const [isClient, setIsClient] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(1)

  // Hydration issue fix
  useEffect(() => {
    setIsClient(true)
  }, [])
  if (!isClient) return null

  const handleClick = categoryId => {
    setSelectedCategory(categoryId)
    console.log("Menu category button clicked:", categoryId)
  }

  // Dummy data
  const dishCategories = [
    {
      id: 1,
      name: "Food",
      image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    },
    {
      id: 2,
      name: "Drink",
      image: "https://images.unsplash.com/photo-1559314809-0d155014e29e",
    },
    {
      id: 3,
      name: "Snack",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    },
    {
      id: 4,
      name: "Bakery",
      image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    },
    {
      id: 5,
      name: "Cake",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    },
    {
      id: 6,
      name: "Seafood",
      image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    },
    {
      id: 7,
      name: "Vegan",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    },
  ]

  return (
    <div className="flex flex-row gap-4 pl-4 pb-4 pr-8 my-auto overflow-x-auto whitespace-nowrap scrollbar-hide">
      {/* map items here */}
      {dishCategories.map(category => (
        <button
          key={category.id}
          className={`flex flex-row items-center justify-center gap-4 border-2 rounded-full p-2 px-8 shadow-sm ${
            selectedCategory === category.id
              ? "border-[#21356f]"
              : "border-gray-100"
          }`}
          onClick={() => handleClick(category.id)}
        >
          <Image
            className="rounded-full w-8 h-8 object-cover"
            src={category.image}
            alt={category.name}
            width={0}
            height={0}
            sizes="100vw"
            priority
          />
          <h5>{category.name}</h5>
        </button>
      ))}

      {/* mapping ends here */}
    </div>
  )
}
