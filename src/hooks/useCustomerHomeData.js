import React from "react"
import useSWR from "swr"
import { API_CUSTOMER_HOME_URL } from "@/config/app"
import fetcher from "../utils/fetcher"

export const useCustomerHomeData = () => {
  const { data, error, isLoading } = useSWR(API_CUSTOMER_HOME_URL, fetcher)
  console.log(data)
  return {
    data,
    isLoading,
    isError: error,
  }
}