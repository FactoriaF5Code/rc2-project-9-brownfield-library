import { Outlet, useLocation } from "react-router-dom";
import { CuratorHeader } from "../../components/Header/CuratorHeader";
import "./CuratorPortal.css";


export const CuratorPortal = () => {
  const location = useLocation();
  const msg = location.state?.msg;

  return (
    <div className="app-container">
      <CuratorHeader />
      {msg && <div className="toastMessage">{msg}</div>}
      <main>
        <Outlet />
       
      </main>
    </div>
  );
};
