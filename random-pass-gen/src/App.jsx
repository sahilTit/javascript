import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState("6");
  const [noAllowed, setNoAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTWVXYZabcdefghijklmnopqrstwvxyz";
    if (noAllowed) str += "0123456789";
    if (charAllowed) str += ",./;'[]{}*#@!$%&~!+-";
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, noAllowed, setPassword]);
  const passwordRef = useRef(null);
  // passwordGenerator()
  const copyPasswordToClip = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [length, noAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <div>
        <div>
          <h1>Password Generator</h1>
          <input
            className="input1"
            type="text"
            value={password}
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClip}>Copy</button>
        </div>
        <div>
          <input
            className="input2"
            type="range"
            min={6}
            max={50}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length:{length}</label>
          <input
            type="checkbox"
            defaultChecked={noAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label>Numbers</label>
          <input
            type="checkbox"
            defaultChecked={noAllowed}
            onChange={() => {
              setNoAllowed((prev) => !prev);
            }}
          />
          <label>Character</label>
        </div>
      </div>
    </>
  );
}

export default App;
