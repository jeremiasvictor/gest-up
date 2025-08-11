import "./style.css";

function Login() {
  return (
    <div className="container">
      <div className="bg-icons">
        <img src="../../../public/flecha.png" alt="" className="bg-arrow" />
        <img src="../../../public/flecha.png" alt="" className="bg-arrow" />
      </div>

      <img src="../../../public/icon.png" alt="Logo Image" />
      <h1>Log in to GestUp</h1>
      <form>
        <label htmlFor="username">Username</label>
        <div className="input">
          <input type="text" name="name" />
        </div>
        <div className="password-items">
          <label htmlFor="username">Password</label>
          <label className="forgot" htmlFor="forgot-password">
            Forgot password?
          </label>
        </div>
        <div className="input">
          <input type="text" name="password" />
          <img
            src="../../../public/hidden.png"
            alt="Hidden Icon"
            className="hidden-icon"
          />
        </div>
        <button type="button" onClick={() => console.log("botao")}>
          Log in
        </button>
      </form>

      <div className="toSignIn">
        <p>New to GestUp?</p>
        <p className="constrastP">Create a account</p>
      </div>
    </div>
  );
}

export default Login;
