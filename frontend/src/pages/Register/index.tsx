import { useRef, useState } from "react";

import api from "../../services/api";
import "./style.css";

function Register() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputFirstName = useRef<HTMLInputElement>(null);
  const inputLastName = useRef<HTMLInputElement>(null);
  const inputCompany = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);
  const inputTerms = useRef<HTMLInputElement>(null);

  async function handleRegister() {
    setLoading(true);
    setError("");
    const firstName = inputFirstName.current?.value || "";
    const lastName = inputLastName.current?.value || "";
    const company = inputCompany.current?.value || "";
    const email = inputEmail.current?.value || "";
    const password = inputPassword.current?.value || "";
    const terms = inputTerms.current?.checked || false;

    if (!terms) {
      setError("Você precisa aceitar os termos.");
      setLoading(false);
      return;
    }

    try {
      const response = await api.post("/register", {
        firstName,
        lastName,
        company,
        email,
        password,
      });

      console.log("Registro sucesso", response.data);
    } catch (err: any) {
      setError("Erro ao registrar. Tente novamente.");
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
      <h1>Get start with us</h1>
      <form>
        <div className="name">
          <div className="first">
            <label htmlFor="first">First name</label>
            <div className="name-input input">
              <input type="text" name="first-name" ref={inputFirstName} />
            </div>
          </div>

          <div className="last">
            <label htmlFor="last">Last name</label>
            <div className="name-input input">
              <input type="text" name="last-name" ref={inputLastName} />
            </div>
          </div>
        </div>
        <div className="company-name">
          <label htmlFor="company">Company name</label>
          <div className="input">
            <input type="text" name="company-name" ref={inputCompany} />
          </div>
        </div>
        <div className="email-adress">
          <label htmlFor="email">Email adress</label>
          <div className="input">
            <input type="text" name="email-adress" ref={inputEmail} />
          </div>
        </div>
        <div className="password">
          <label htmlFor="password">Create a password</label>
          <div className="input">
            <input type="text" name="password" ref={inputPassword} />
          </div>

          <div className="terms">
            <input
              type="checkbox"
              id="terms"
              className="terms-square"
              ref={inputTerms}
            />
            <p className="terms-text">
              I agree to the <a href="">Terms and Privacy</a>
            </p>
          </div>
        </div>
        <button type="button" onClick={handleRegister} disabled={loading}>
          {loading ? "Criando..." : "Create account"}
        </button>
        {error && <p>{error}</p>}
      </form>

      <div className="toLogIn">
        <p>Already have an account?</p>
        <a href="/login">Log in</a>
      </div>
    </div>
  );
}

export default Register;
