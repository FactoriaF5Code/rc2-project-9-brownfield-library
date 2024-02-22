import { Outlet, useLocation } from "react-router-dom"
import { CuratorHeader } from "../../components/Header/CuratorHeader"

export const CuratorPortal = () => {
    
    const location = useLocation();
    const msg = location.state?.msg;

    return (
        <>
            <CuratorHeader />
            { msg && <span>{msg}</span>}
            <main>
                <Outlet />
            </main>
        </>
    )
}
