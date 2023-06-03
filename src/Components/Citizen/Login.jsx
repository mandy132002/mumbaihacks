import "./Login.css";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signin } from "../../api";

const initialState = { email: "", password: "", role: "citizen" };

function Login() {
  const [form, setForm] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    await signin(form);
    let payload = {
      email: " ",
      role: "citizen",
      id: " ",
    };
    const user = JSON.parse(localStorage.getItem("profile"));
    console.log(user);

    if (user) {
      const parts = user.split(".");
      payload = JSON.parse(atob(parts[1]));
      // console.log(payload);
    }
    if (payload.role === "government") {
      navigate("/government");
    } else if (payload.role === "citizen") {
      navigate("/citizen");
    }
  };

  const handleChange = (e) => {
    console.log("Change happened");
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="outer-container">
      <div className="form-container-login">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="header-container">
            <h1 className="header">Log In</h1>
          </div>
          <hr />
          <div className="internal-form-container">
            <div>
              <label htmlFor="userId">User ID: </label>
            </div>
            <div>
              <input
                name="email"
                onChange={handleChange}
                type="email"
                id="userId"
                required
              />
            </div>
          </div>
          <div className="internal-form-container">
            <div>
              <label htmlFor="password">Password: </label>
            </div>
            <div>
              <input
                name="password"
                onChange={handleChange}
                type="password"
                id="password"
                required
              />
            </div>
          </div>
          <div className="internal-form-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
