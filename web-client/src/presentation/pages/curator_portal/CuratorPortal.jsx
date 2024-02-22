import { Outlet } from "react-router-dom"
import { CuratorHeader } from "../../components/Header/CuratorHeader"

export const CuratorPortal = () => {
    
    return (
        <>
            <CuratorHeader />
            <main>
                <Outlet />
            </main>
        </>
    )
}
