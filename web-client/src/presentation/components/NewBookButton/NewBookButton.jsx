import './NewBookButton.css'
import { Link } from 'react-router-dom'

export const NewBookButton = () => {
  return (
    <Link to="/books/new">
      <button className="btn-new-book">New Book</button>
    </Link>
  )
}
