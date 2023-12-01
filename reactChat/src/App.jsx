import React, { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import '../src/styles/LoginRegister.css'
import '../src/styles/Home.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLoginSubmit = (credentials) => {
    handleLogin();
  };

  const handleRegisterSubmit = (userInfo) => {
  };

  return (
    <>
      {isLoggedIn ? (
        <Home onLogout={handleLogout} />
      ) : (
        <Login onLoginSubmit={handleLoginSubmit} />
      )}
    </>
  );
}

export default App;