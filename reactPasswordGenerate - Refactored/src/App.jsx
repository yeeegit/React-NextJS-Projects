import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);

  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("Copy");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (symbolAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, symbolAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, symbolAllowed]);

  const passwordRef = useRef(null);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);

    passwordRef.current?.select();

    setButtonText("Copied!");

    setTimeout(() => {
      setButtonText("Copy");
    }, 3000);
  };

  return (
      <main className="container">
        <h2 className="main-h2">Generate Password</h2>

        <section className="card">
          <input
            className="passInput"
            type="text"
            value={password}
            readOnly
            placeholder="Password"
            ref={passwordRef}
          />
          <button onClick={copyPassword} className="copy-button">
            {buttonText}
          </button>
        </section>
        <section className="check-field">
          <div className="input-check">
            <input
              type="range"
              min={6}
              max={24}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="pass-length"
              name=""
              id=""
            />
            <label htmlFor="length">length:{length}</label>
            <div className="input-check">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                onChange={() => {
                  setNumberAllowed((previous) => !previous);
                }}
              />
              <label htmlFor="numbers">numbers</label>
              <div className="input-check">
                <input
                  type="checkbox"
                  defaultChecked={symbolAllowed}
                  onChange={() => {
                    setSymbolAllowed((previous) => !previous);
                  }}
                />
                <label htmlFor="symbolInput">symbols</label>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}

export default App;
