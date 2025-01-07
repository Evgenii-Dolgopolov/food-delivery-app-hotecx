"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const data = [
  {
    src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
    title: "Night view",
    description: "4.21M views",
  },
  {
    src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
    title: "Lake view",
    description: "4.74M views",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Mountain view",
    description: "3.98M views",
  },
]

export default function Banner() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[240px] w-full">
              <Image
                className="w-full h-full object-cover"
                src={item.src}
                alt={item.title}
                width={0}
                height={0}
                sizes="100vw"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
