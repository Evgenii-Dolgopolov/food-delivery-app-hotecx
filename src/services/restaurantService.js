import { fetch } from "../utils/fetcher.js"
import { API_CUSTOMER_HOME_URL } from "../config/api"

export async function getHomepageData() {
  return fetch(API_CUSTOMER_HOME_URL)
}

export async function getHighlightRestaurants() {
  const data = await getHomepageData()
  return data.highlightRestaurantList || []
}

export async function getNearbyRestaurants() {
  const data = await getHomepageData()
  return data.nearByRestaurantList || []
}

export async function getRestaurantCategories() {
  const data = await getHomepageData()
  return data.restaurantCategoryList || []
}

export async function getBanners() {
  const data = await getHomepageData()
  return data.bannerList || []
}
