import "./Login.css";

function Login() {
  return (
    <div className="outer-container">
      <div className="form-container">
        <form className="login-form">
          <div className="header-container">
            <h1 className="header">Log In</h1>
          </div>
          <div className="internal-form-container">
            <div>
              <label htmlFor="userId">User ID: </label>
            </div>
            <div>
              <input type="text" id="userId" required />
            </div>
            
          </div>
          <div className="internal-form-container">
            <div>
              <label htmlFor="password">Password: </label>
            </div>
            <div>
              <input type="password" id="password" required />
            </div>
          </div>
          <div className="internal-form-container">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
