import "../../components/Table/Table.css";
import { Link } from 'react-router-dom';

export const CuratorHome = () => {
  return (
    <div>
     
      <div className="btn-access-group">
      <Link to="books"> <button className="btn-access">Books</button></Link>
      <Link to="members"> <button className="btn-access blue">Members</button></Link>
      <Link to="loans"> <button className="btn-access blue">Loans</button></Link>
      </div>
      </div>
  )
}
