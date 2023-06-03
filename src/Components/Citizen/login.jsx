import "./Login.css";

function Login() {
  return (
    <>
      <div className="form-container">
        <form className="login-form">
          <div className="internal-form-container">
            <div>
              <label htmlFor="userId">User ID: </label>
            </div>
            <div>
              <input type="text" id="userId" />
            </div>
            
          </div>
          <div className="internal-form-container">
            <div>
              <label htmlFor="password">Password: </label>
            </div>
            <div>
              <input type="password" id="password" />
            </div>
          </div>
          <div className="internal-form-container">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
