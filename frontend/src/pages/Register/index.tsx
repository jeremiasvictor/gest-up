import { useRef, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styles from "./Register.module.css";

import api from "../../services/api";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    terms: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  useEffect(() => {
    const pageClassName = styles.RegisterPage;
    document.body.classList.add(pageClassName);

    return () => {
      document.body.classList.remove(pageClassName);
    };
  }, []);

  async function handleRegister() {
    setLoading(true);
    setError("");

    if (!formData.terms) {
      setError("You need to accept the terms.");
      setLoading(false);
      return;
    }

    const name = `${formData.firstName} ${formData.lastName}`.trim();

    try {
      await api.post("/user", {
        name: name,
        email: formData.email,
        password: formData.password,
      });

      navigate("/login?registered=true");
    } catch (err: any) {
      const errorMessage = err.response?.data?.message;
      // setError("Error registering. Please try again.");
      setError(errorMessage);
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
      <h1 className={styles.title}>Get start with us</h1>
      <form className={styles.registerForm}>
        <div className={styles.name}>
          <div className={styles.first}>
            <label htmlFor="first">First name</label>
            <div className={`${styles.nameInput} ${styles.input}`}>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.last}>
            <label htmlFor="last">Last name</label>
            <div className={`${styles.nameInput} ${styles.input}`}>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className={styles.emailAdress}>
          <label htmlFor="email">Email adress</label>
          <div className={styles.input}>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.password}>
          <label htmlFor="password">Create a password</label>
          <div className={styles.input}>
            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className={styles.terms}>
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className={styles.termsSquare}
              checked={formData.terms}
              onChange={handleChange}
            />
            <p className={styles.termsText}>
              I agree to the <a href="">Terms and Privacy</a>
            </p>
          </div>
        </div>
        <button type="button" onClick={handleRegister} disabled={loading}>
          {loading ? "Criando..." : "Create account"}
        </button>
        {error && <p className={styles.errorMessage}>{error}</p>}
      </form>

      <div className={styles.toLogIn}>
        <p>Already have an account?</p>
        <a href="/login">Log in</a>
      </div>
    </div>
  );
}

export default Register;
