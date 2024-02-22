import { Outlet } from "react-router-dom"
import { CuratorHeader } from "../../components/Header/CuratorHeader"
import { useLocation } from "react-router-dom";

export const CuratorPortal = () => {
    const location = useLocation();
    const message = location.state?.msg;
    return (
        <>
            <CuratorHeader />
            <main>
                <Outlet />
            </main>
            {message && <p>{message}</p>}
        </>
    )
}
