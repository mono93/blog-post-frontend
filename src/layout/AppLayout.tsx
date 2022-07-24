import { useState } from "react"
import AppFooter from "./AppFooter"
import AppHeader from "./AppHeader"
import AppSideBar from "./AppSideBar"

const AppLayout = (props: any) => {

    const [sidebarExpand, setSidebarExpend] = useState(false)

    return (
        <>
            <AppHeader setSidebarExpend={setSidebarExpend} />
            {props.children}
            <AppFooter />
            <AppSideBar sidebarExpand={sidebarExpand} setSidebarExpend={setSidebarExpend} />
        </>
    )
}

export default AppLayout