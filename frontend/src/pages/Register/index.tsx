import { useRef, useState, useEffect } from "react";

import api from "../../services/api";
import styles from "./Register.module.css";

function Register() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputFirstName = useRef<HTMLInputElement>(null);
  const inputLastName = useRef<HTMLInputElement>(null);
  const inputCPF = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);
  const inputTerms = useRef<HTMLInputElement>(null);

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
    const firstName = inputFirstName.current?.value || "";
    const lastName = inputLastName.current?.value || "";
    const completeName = firstName + " " + lastName || "";
    const cpf = inputCPF.current?.value || "";
    const email = inputEmail.current?.value || "";
    const password = inputPassword.current?.value || "";
    const terms = inputTerms.current?.checked || false;

    if (!terms) {
      setError("Você precisa aceitar os termos.");
      setLoading(false);
      return;
    }

    try {
      const response = await api.post("/user", {
        nome: completeName,
        email: email,
        senha: password,
      });

      console.log("Registro sucesso", response.data);
    } catch (err: any) {
      setError("Erro ao registrar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.bgIcons}>
        <img
          src="../../../public/flecha.png"
          alt=""
          className={styles.bgArrow}
        />
        <img
          src="../../../public/flecha.png"
          alt=""
          className={styles.bgArrow}
        />
      </div>

      <a href="/">
        <img
          className={styles.logo}
          src="../../../public/icon.png"
          alt="Logo Image"
        />
      </a>
      <h1 className={styles.title}>Get start with us</h1>
      <form className={styles.registerForm}>
        <div className={styles.name}>
          <div className={styles.first}>
            <label htmlFor="first">First name</label>
            <div className={`${styles.nameInput} ${styles.input}`}>
              <input type="text" name="first-name" ref={inputFirstName} />
            </div>
          </div>

          <div className={styles.last}>
            <label htmlFor="last">Last name</label>
            <div className={`${styles.nameInput} ${styles.input}`}>
              <input type="text" name="last-name" ref={inputLastName} />
            </div>
          </div>
        </div>
        <div className={styles.companyName}>
          <label htmlFor="company">CPF</label>
          <div className={styles.input}>
            <input type="text" name="company-name" ref={inputCPF} />
          </div>
        </div>
        <div className={styles.emailAdress}>
          <label htmlFor="email">Email adress</label>
          <div className={styles.input}>
            <input type="text" name="email-adress" ref={inputEmail} />
          </div>
        </div>
        <div className={styles.password}>
          <label htmlFor="password">Create a password</label>
          <div className={styles.input}>
            <input type="text" name="password" ref={inputPassword} />
          </div>

          <div className={styles.terms}>
            <input
              type="checkbox"
              id="terms"
              className={styles.termsSquare}
              ref={inputTerms}
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
