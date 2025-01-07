"use client"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  const getHeaderTitle = () => {
    switch (pathname) {
      case "/menu":
        return "Menu"
      case "/cart":
        return "Cart"
      case "/my-order":
        return "My Order"
      default:
        return "Hotecx POS"
    }
  }

  return (
    <header className="h-16 flex items-center justify-center text-gray-50 bg-navigationMenuBrandColor">
      <h1 className="text-2xl">{getHeaderTitle()}</h1>
    </header>
  )
}
