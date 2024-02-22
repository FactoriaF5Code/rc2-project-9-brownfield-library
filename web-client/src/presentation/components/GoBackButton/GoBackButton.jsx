import { useNavigate } from 'react-router-dom';

function GoBackButton() {
  let navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)}>
      Go Back
    </button>
  );
}

export default GoBackButton;