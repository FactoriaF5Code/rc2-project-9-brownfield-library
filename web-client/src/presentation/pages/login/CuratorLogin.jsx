import { useState } from 'react';
import { useAuthenticationContext } from '../../../middleware/context/AuthenticationContext';
import { useNavigate } from 'react-router-dom';

const CuratorLogin = () => {
  // State for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuthenticationContext();
  const navigate = useNavigate();


  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const loginSuccess = await login({ email: email, password: password });
      if (loginSuccess) {
        setEmail('');
        setPassword('');
        navigate("/members", { state: { msg: "Login successful" } });
      }
    }
    catch (err) {
      console.log(err);
    }

  };

  return (
    <form onSubmit={handleSubmit} className="Form">

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default CuratorLogin;

