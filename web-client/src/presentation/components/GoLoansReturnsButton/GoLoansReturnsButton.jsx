import "./GoLoansReturnsButton.css"; 
import { Link } from 'react-router-dom'

export const GoLoansReturnsButton = () => {
  return (
    <Link to="search">
      <button className="btn-go-returns-loan">Loans</button>
    </Link>
  )
}