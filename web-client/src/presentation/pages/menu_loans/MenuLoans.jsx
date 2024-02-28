import "./MenuLoans.css";
import { CuratorHeader } from "../../components/Header/CuratorHeader";
import { NewLoanButton } from "../../components/NewLoanButton/NewLoanButton";
import { GoLoansReturnsButton } from "../../components/GoLoansReturnsButton/GoLoansReturnsButton";

export const MenuLoans = () => {
  return (
    <div>
        <CuratorHeader />
        <NewLoanButton />
        <GoLoansReturnsButton />

    </div>
  )
}

