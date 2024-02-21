import './NewMemberButton.css'
import { Link } from 'react-router-dom'

export const NewMemberButton = () => {
  return (
    <Link to="/nuevo-socio">
      <button className="btn-new-member">+ Añadir nuevo socio</button>
    </Link>
  )
}
