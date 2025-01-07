import { API_CUSTOMER_HOME_URL } from "../config/app.js"
import { fetcher } from "../utils/fetcher.js"

export const fetchData = async () => {
  return await fetcher.post(API_CUSTOMER_HOME_URL, { raw: "" })
}