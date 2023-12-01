import { useState } from 'react';
import '../styles/LoginRegister.css';

const Login = ({ onLoginSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginSubmit({ email, password });
  };

  return (
    <div className="page">
      <div className="container">
        <div className="container-wrapper">
          <h2>wazzaaApp</h2>
          <h3>log in</h3>
          <form className="form-container" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">sign in</button>
          </form>
          <p style={{ textTransform: "none" }}>
            Dont have an account? <span>Register</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;