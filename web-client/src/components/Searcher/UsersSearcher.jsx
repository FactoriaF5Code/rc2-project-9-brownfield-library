import './UsersSearcher.css';
// import { VerticalToggleButtons } from './VerticalToogleButtons';
import PersonIcon from '@mui/icons-material/Person';

export const UsersSearcher = () => {

  return (
    <section className="userSearchContainer">
      <div className='userSearchContainer__Field'>
        <div className="userButton">
        <PersonIcon className='userIcon' />
        </div>
      
        <input
          type="search"
          className="userSearchContainer__Field-Input"
          placeholder=" Buscar socio por nombre, apellido, nº de socio"
        />
        <button className="userSearchContainer__Field-Button">
          <img src="/src/assets/searchIcon.svg" alt="búsqueda icono" />
        </button>        
      </div>
    </section>
  )
}
