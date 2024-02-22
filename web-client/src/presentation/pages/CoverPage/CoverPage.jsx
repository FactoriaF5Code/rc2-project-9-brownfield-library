import { Link } from "react-router-dom";
import { CoverPageHeader as Header } from "../../components/Header/CoverPageHeader";
import "./CoverPage.css";

export const CoverPage = () => {
    return (
        <>
            <Header />
            <div className="btn-access-group">
                <Link to="/members"> <button className="btn-access">Member access</button></Link>
                <Link to="/curators"> <button className="btn-access blue">Curator access</button></Link>
            </div>
        </>
    )
}
