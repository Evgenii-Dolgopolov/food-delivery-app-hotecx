import BottomNavBar from "./BottomNavBar"
import Header from "./Header"

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col justify-start pt-6 pb-24">{children}</main>
      <BottomNavBar />
    </div>
  )
}
