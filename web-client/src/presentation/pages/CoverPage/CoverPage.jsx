import { Link } from "react-router-dom";
import { CoverPageHeader as Header } from "../../components/Header/CoverPageHeader";
import "./CoverPage.css";

export const CoverPage = () => {
    return (
        <>
            <Header />
            <div >
                <Link to="/members/home"> <button className="btn-access">Member access</button></Link>
                <Link to="/curators/home"> <button className="btn-access">Curator access</button></Link>
            </div>
        </>
    )
}
