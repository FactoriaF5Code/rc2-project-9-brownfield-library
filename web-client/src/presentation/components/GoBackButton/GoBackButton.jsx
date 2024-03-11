import "./GoBackButton.css";
import { useNavigate } from 'react-router-dom';
import Flecha from "../../assets/FlechaBack.svg";
 
function GoBackButton() {
  let navigate = useNavigate();

  return (
    <button className="btn-header" onClick={() => navigate(-1)}>
      <img src={Flecha} alt="Ir atras" />
    </button>
  );
}

export default GoBackButton;