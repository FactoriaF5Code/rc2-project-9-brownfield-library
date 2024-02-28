import { useLocation } from "react-router-dom";
import { CuratorHeader } from "../../components/Header/CuratorHeader";
import "./CuratorPortal.css";
import { NewLoanButton } from "../../components/NewLoanButton/NewLoanButton";
import { GoLoansReturnsButton } from "../../components/GoLoansReturnsButton/GoLoansReturnsButton";

export const CuratorPortal = () => {
  const location = useLocation();
  const msg = location.state?.msg;

  return (
    <div className="app-container">
      <CuratorHeader />
      {msg && <div className="toastMessage">{msg}</div>}
      <main>
        {/* <Outlet /> */}
        <NewLoanButton />
        <GoLoansReturnsButton />
      </main>
    </div>
  );
};
