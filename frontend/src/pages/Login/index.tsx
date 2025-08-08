import "./style.css";

function Login() {
  return (
    <div className="container">
      <h1>Log in to GestUp</h1>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" name="name" />
        <label htmlFor="username">Password</label>
        <input type="text" name="password" />
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
