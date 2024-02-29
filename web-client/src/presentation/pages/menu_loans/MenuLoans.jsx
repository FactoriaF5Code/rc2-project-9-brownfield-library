import "./MenuLoans.css";

import { NewLoanButton } from "../../components/NewLoanButton/NewLoanButton";
import { GoLoansReturnsButton } from "../../components/GoLoansReturnsButton/GoLoansReturnsButton";

export const MenuLoans = () => {
  return (
    <div className="button-container">
      <NewLoanButton />
      <GoLoansReturnsButton />
    </div>
  );
};
