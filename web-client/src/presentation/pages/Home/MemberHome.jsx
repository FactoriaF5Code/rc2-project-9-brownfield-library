/* eslint-disable react/prop-types */
import "../../components/Table/Table.css";
import { Link } from 'react-router-dom';


export const MemberHome = () => {
  return (
    <div className="btn-access-group">
      <Link to="books"> <button className="btn-access">Books</button></Link>
      <Link to="loans"> <button className="btn-access blue">My Loans</button></Link>
    </div>
  )
}
