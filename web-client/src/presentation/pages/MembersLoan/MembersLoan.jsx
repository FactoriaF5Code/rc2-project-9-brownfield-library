import "./MembersLoan.css"
import { LoanMemberTable } from "../../components/Table/LoanMemberTable";

export const MembersLoan = () => {
  return (
    <div className="membersLoanContainer">
        <h2 className="Form__title">Tus préstamos</h2>
        <LoanMemberTable />
    </div>
  )
}