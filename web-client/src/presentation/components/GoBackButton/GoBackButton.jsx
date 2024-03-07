import { useNavigate } from 'react-router-dom';
import "./GoBackButton.css"

function GoBackButton() {
  let navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)}>
      Go Back
    </button>
  );
}

export default GoBackButton;