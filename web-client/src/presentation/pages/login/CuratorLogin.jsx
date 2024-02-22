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
  const handleSubmit = (event) => {
    event.preventDefault();
    
    login({email: email, password: password});
    
    setEmail('');
    setPassword('');
    navigate("/curators", { state: { msg: "Login successful" } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default CuratorLogin;

