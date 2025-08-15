import "./style.css";

function Register() {
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
              <input type="text" name="first-name" />
            </div>
          </div>

          <div className="last">
            <label htmlFor="last">Last name</label>
            <div className="name-input input">
              <input type="text" name="last-name" />
            </div>
          </div>
        </div>
        <div className="company-name">
          <label htmlFor="company">Company name</label>
          <div className="input">
            <input type="text" name="company-name" />
          </div>
        </div>
        <div className="email-adress">
          <label htmlFor="email">Email adress</label>
          <div className="input">
            <input type="text" name="email-adress" />
          </div>
        </div>
        <div className="password">
          <label htmlFor="password">Create a password</label>
          <div className="input">
            <input type="text" name="password" />
          </div>

          <div className="terms">
            <input type="checkbox" id="terms" className="terms-square" />
            <p className="terms-text">
              I agree to the <a href="">Terms and Privacy</a>
            </p>
          </div>
        </div>
        <button type="button" onClick={() => console.log("botao")}>
          Create account
        </button>
      </form>

      <div className="toLogIn">
        <p>Already have an account?</p>
        <a href="/login">Log in</a>
      </div>
    </div>
  );
}

export default Register;
