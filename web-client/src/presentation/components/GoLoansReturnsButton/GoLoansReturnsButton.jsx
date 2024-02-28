import "./GoLoansReturnsButton.css"; 
import { Link } from 'react-router-dom'

export const GoLoansReturnsButton = () => {
  return (
    <Link to="/loans/returns">
      <button className="btn-go-returns-loan">Loans</button>
    </Link>
  )
}