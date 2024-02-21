import './Lending.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { SecondaryHeader } from "../../components/Header/SecondaryHeader"
import { Link } from 'react-router-dom';

export const LendingOk = () => {
  return (
    <div>
      <SecondaryHeader />
      <section className="lending">
        <CheckCircleIcon className='lendingOk__checkIcon'/>
        <h2 className="lendingOk__title">Préstamo realizado correctamente</h2>
        <ul className="lending__book">
          <li className="lending__book-text">#1</li>
          <li className="lending__book-text">0124-5478-5789-5</li>
          <li className="lending__book-text">Los últimos balleneros</li>
          <li className="lending__book-text">Doug Bock Clark</li>
        </ul>
        <h2 className="lendingOk__title">a usuario con nº de socio:</h2>
        <p className='lendingOk__userNumber'>123456</p>
        <Link to="/">
          <button className="lendingOk_button">+ Registrar nuevo préstamo</button>
        </Link>
      </section>
    </div>
    )
}
