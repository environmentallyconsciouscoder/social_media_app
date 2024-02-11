import { Outlet } from "react-router-dom"
import { SideBar } from "../side_bar/side_bar"
import { Navigator } from "../navigator/navigator"

function TwitterLayout() {
  return (
    <>
        {/* the navigator UI doesn't change   */}
        <Navigator />
        {/* this will render the child routes showing different UI */}
        <Outlet />
        {/* the sidebar UI doesn't change   */}
        <SideBar />
    </>
  )
}

export default TwitterLayout