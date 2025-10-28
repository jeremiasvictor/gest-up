import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

import api from "../../services/api";

import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const inputEmail = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const pageClassName = styles.loginPage;
    document.body.classList.add(pageClassName);

    return () => {
      document.body.classList.remove(pageClassName);
    };
  }, []);

  async function handleLogin() {
    setLoading(true);
    setError("");

    const email = inputEmail.current?.value || "";
    const password = inputPassword.current?.value || "";

    try {
      const response = await api.post("/user/login", { email, password });
      const userId = response.data.id;
      const userName = response.data.name;

      if (userId && userName) {
        localStorage.setItem("gestup_userId", userId);
        localStorage.setItem("gestup_userName", userName);
        navigate("/business");
      } else {
        setError("An unexpected error ocurred while logging in");
      }
    } catch (err: any) {
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.bgIcons}>
        <img src="/flecha.png" alt="" className={styles.bgArrow} />
        <img src="/flecha.png" alt="" className={styles.bgArrow} />
      </div>

      <a href="/">
        <img className={styles.logo} src="/icon.png" alt="Logo Image" />
      </a>
      <h1 className={styles.title}>Welcome back!</h1>
      <form className={styles.loginForm}>
        <div className={styles.emailAdress}>
          <label htmlFor="email">Email adress</label>
          <div className={styles.input}>
            <input type="text" name="email-adress" ref={inputEmail} />
          </div>
        </div>

        <div className={styles.password}>
          <div className={styles.passwordLabelRow}>
            <label htmlFor="password">Password</label>
            <a href="/forgot-password" className={styles.forgotPassword}>
              Forgot password?
            </a>
          </div>
          <div className={styles.input}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              ref={inputPassword}
            />
            <span
              className={styles.hiddenIcon}
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

      <div className={styles.toSignIn}>
        <p>New to GestUp?</p>
        <a href="/register">Sign up</a>
      </div>
    </div>
  );
}

export default Login;
