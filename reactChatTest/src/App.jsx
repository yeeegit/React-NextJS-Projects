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
    // Burada backend'e credentials'ları gönder ve giriş kontrolü yap
    // Simülasyon amaçlı sadece onLogin fonksiyonunu çağıralım
    handleLogin();
  };

  const handleRegisterSubmit = (userInfo) => {
    // Burada backend'e userInfo'yi gönder ve kayıt kontrolü yap
    // Simülasyon amaçlı henüz bir işlem yapmıyoruz
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