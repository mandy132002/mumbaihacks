import "./Signup.css";

function Signup() {
  return (
    <div className="outer-container">
      <div className="form-container">
        <form className="login-form">
          <div className="header-container">
            <h1 className="header">Sign Up</h1>
          </div>
          <hr />
          <div className="internal-form-container">
            <div>
              <label htmlFor="userId">Name: </label>
            </div>
            <div>
              <input type="text" id="name" required />
            </div>
          </div>
          <div className="internal-form-container">
            <div>
              <label htmlFor="email">Email: </label>
            </div>
            <div>
              <input type="email" id="email" required />
            </div>
          </div>
          <div className="internal-form-container">
            <div>
              <label htmlFor="mobileNumber">Mobile Number: </label>
            </div>
            <div>
              <input type="email" id="email" required />
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
            <div>
              <label htmlFor="confirmPassword">Confirm Password: </label>
            </div>
            <div>
              <input type="password" id="confirmPassword" required />
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

export default Signup;
