import { useState, useRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import "./style.css";
import api from "../../services/api";

function Login() {
  const [showPassword, setShowPassword] = useState(true);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const inputEmail = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);

  async function handleLogin() {
    setLoading(true);
    setError("");

    const email = inputEmail.current?.value || "";
    const password = inputPassword.current?.value || "";

    try {
      const response = await api.post("/login", { email, password });
      console.log("Login sucesso", response.data);
    } catch (err: any) {
      setError("Usuário ou senha inválidos.");
    } finally {
      setLoading(false);
    }
  }

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
            <input type="text" name="email-adress" ref={inputEmail} />
          </div>
        </div>

        <div className="password">
          <div className="password-label-row">
            <label htmlFor="password">Password</label>
            <a href="/forgot-password" className="forgot-password">
              Forgot password?
            </a>
          </div>
          <div className="input">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              ref={inputPassword}
            />
            <span
              className="hidden-icon"
              onClick={() => setShowPassword((v) => !v)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
        <button type="button" onClick={handleLogin} disabled={loading}>
          {loading ? "Entrando..." : "Log in"}
        </button>
        {error && <p>{error}</p>}
      </form>

      <div className="toSignIn">
        <p>New to GestUp?</p>
        <a href="/register">Log in</a>
      </div>
    </div>
  );
}

export default Login;
