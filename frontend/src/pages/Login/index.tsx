import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import "./style.css";

function Login() {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <div className="container">
      <div className="bg-icons">
        <img src="../../../public/flecha.png" alt="" className="bg-arrow" />
        <img src="../../../public/flecha.png" alt="" className="bg-arrow" />
      </div>

      <a href="/">
        <img src="../../../public/icon.png" alt="Logo Image" />
      </a>
      <h1>Welcome back!</h1>
      <form>
        <div className="email-adress">
          <label htmlFor="email">Email adress</label>
          <div className="input">
            <input type="text" name="email-adress" />
          </div>
        </div>

        <div className="password">
          <div className="password-label-row">
            <label htmlFor="password">Password</label>
            <a href="/forgot-password" className="forgot-password">
              Forgot password?
            </a>
          </div>
          <div className="input" style={{ position: "relative" }}>
            <input type={showPassword ? "text" : "password"} name="password" />
            <span
              className="hidden-icon"
              onClick={() => setShowPassword((v) => !v)}
              style={{ cursor: "pointer" }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
        <button type="button" onClick={() => console.log("botao")}>
          Log in
        </button>
      </form>

      <div className="toSignIn">
        <p>New to GestUp?</p>
        <a href="/register">Log in</a>
      </div>
    </div>
  );
}

export default Login;
