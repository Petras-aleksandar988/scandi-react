import ReactLayout from "../components/ReactLayout"
import { Outlet } from "react-router-dom"

function MainLayout() {
  return (
    <>
    <ReactLayout />
    <Outlet />
    </>
  )
}

export default MainLayout