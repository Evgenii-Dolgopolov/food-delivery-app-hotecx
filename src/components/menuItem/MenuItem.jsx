"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "../index"
import { fetchData } from "../../hooks/useCustomerHomeData.js"
import { sliceName } from "@/utils/utilities"

const MenuItem = ({ isPromotional }) => {
  // Dummy data
  const regularItems = [
    {
      id: 1,
      name: "Fried Noodle with Chicken Fried Noodle with Chicken Fried Noodle with Chicken",
      price: 110,
      image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    },
    {
      id: 2,
      name: "Pad Thai with Shrimp",
      price: 120,
      image: "https://images.unsplash.com/photo-1559314809-0d155014e29e",
    },
    {
      id: 3,
      name: "Green Curry with Rice",
      price: 100,
      image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd",
    },
  ]

  const promotionalItems = [
    {
      id: 1,
      name: "Tom Yum Kung Tom Yum Kung Tom Yum Kung",
      currentPrice: 110,
      originalPrice: 130,
      discount: 15,
      image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4",
    },
    {
      id: 2,
      name: "Som Tum Thai",
      currentPrice: 85,
      originalPrice: 100,
      discount: 15,
      image: "https://images.unsplash.com/photo-1559847844-5315695dadae",
    },
    {
      id: 3,
      name: "Mango Sticky Rice",
      currentPrice: 95,
      originalPrice: 110,
      discount: 15,
      image: "https://images.unsplash.com/photo-1559847844-5315695dadae",
    },
  ]

  const items = isPromotional ? promotionalItems : regularItems
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const data = async () => {
      try {
        setIsLoading(true)
        const response = await fetchData()
        setData(response)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    data()
  }, [])

  useEffect(() => {
    console.log("Fetched data:", data)
  }, [data])

  return (
    <div
      className={`pl-4 ${
        isPromotional ? "py-4 bg-[#fafafa]" : "pb-4 bg-[#f7e2e6]"
      }`}
    >
      <h1 className="text-2xl pb-4 font-semibold">
        {isPromotional ? "Promotions" : "Today's Special"}
      </h1>

      <div className="flex flex-row gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {items.map(item => (
          <div
            key={item.id}
            className={`${
              isPromotional ? "min-w-40" : "min-w-48"
            } relative rounded-xl bg-white shadow-md mb-2`}
          >
            {isPromotional && (
              <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-br-xl rounded-tl-xl z-10">
                {item.discount}% OFF
              </div>
            )}

            <div className="relative w-full h-32">
              <Image
                className="absolute inset-0 w-full h-full object-cover rounded-t-xl"
                src={item.image}
                alt={item.name}
                width={0}
                height={0}
                sizes="100vw"
                priority
              />
            </div>

            <div className="p-2">
              <h3 className="text-xs" title={item.name}>
                {isPromotional
                  ? sliceName(item.name, 18)
                  : sliceName(item.name, 27)}
              </h3>

              <div className="flex justify-between items-end h-full">
                <div className="flex flex-col justify-between items-start h-full pt-4">
                  {isPromotional && (
                    <span className="text-xs text-gray-500 line-through">
                      {item.originalPrice} THB
                    </span>
                  )}
                  <p className="text-s">
                    {isPromotional ? item.currentPrice : item.price} THB
                  </p>
                </div>
                <Button>+ Add</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MenuItem
