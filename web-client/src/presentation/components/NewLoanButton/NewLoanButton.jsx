import "./NewLoanButton.css"; 
import { Link } from 'react-router-dom'

export const NewLoanButton = () => {
  return (
    <Link to="new">
      <button className="btn-new-loan">New Loan</button>
    </Link>
  )
}