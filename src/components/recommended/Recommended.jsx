"use client"
import React from "react"
import Image from "next/image"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import { Button } from "../index"
import { sliceName } from "@/utils/utilities"

export default function Recommended() {
  return (
    <div className="px-4">
      <h1 className="text-2xl font-semibold mb-2">Recommended</h1>
      <ImageList
        sx={{
          width: "100%",
          height: "auto",
          margin: "auto",
          marginTop: 0,
          padding: 2,
          paddingTop: 0,
          overflow: "hidden",
        }}
        cols={2}
        gap={12}
      >
        {itemData.map(item => (
          <ImageListItem
            key={item.title}
            sx={{
              overflow: "hidden",
              borderRadius: 4,
              bgcolor: "white",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              aspectRatio: "auto",
              marginBottom: "8px",
              "& .MuiImageListItem-img": {
                display: "none",
              },
            }}
          >
            <div className="h-full flex flex-col">
              <div className="relative h-32">
                <Image
                  className="w-full h-full object-cover"
                  src={item.img}
                  alt={item.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority
                />
              </div>

              <div className="p-3 flex flex-col justify-between">
                <h3
                  className="text-sm font-medium whitespace-nowrap"
                  title={item.title}
                >
                  {sliceName(item.title, 18)}
                </h3>

                <div className="flex justify-between items-end mt-2">
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold">100 THB</p>
                  </div>
                  <Button>+ Add</Button>
                </div>
              </div>
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Turkish Breakfast with coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
]
