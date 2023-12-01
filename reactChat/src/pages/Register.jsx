
import '../styles/LoginRegister.css';

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="page">
      <div className="container">
        <div className="container-wrapper">
          <h2>123</h2>
          <h3>register</h3>
          <form className="form-container" onSubmit={handleSubmit}>
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <button type="submit">sign up</button>
          </form>
          <p style={{ textTransform: "none" }}>
            Already have an account? <span>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;