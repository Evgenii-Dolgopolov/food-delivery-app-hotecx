import axios from "axios"

export const fetcher = {
  // POST request
  post: async (url, data = {}, config = {}) => {
    try {
      const response = await axios.post(url, data, {
        ...config,
        headers: {
          "Content-Type": "application/json",
          ...config.headers,
        },
      })
      return response.data
    } catch (error) {
      console.error("POST Request Error:", error)
      throw error
    }
  },

  // Add other methods (put, delete) as needed
}