import { Outlet } from "react-router"
import Footer from "../components/shared/Footer"
import { NavBar } from "../components/shared/NavBar"

export const MainLayout = () => {
  return (
    <div className="mx-auto min-h-screen">
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
