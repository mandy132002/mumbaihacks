import "./Signup.css";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
  role: "citizen",
  phoneNumber: "",
};

function Signup() {
  const [form, setForm] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (form.password.length < 8) {
      toast.error("Password must be at least 8 characters long", {
        style: { backgroundColor: "#f5cbcc" },
      });
      return;
    }
    if (!emailRegex.test(String(form.email).toLowerCase())) {
      toast.error("Please enter a valid email ID", {
        style: { backgroundColor: "#f5cbcc" },
      });
      return;
    }
    await signup(form);

    let payload = {
      email: " ",
      role: " ",
      phoneNumber: " ",
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
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="outer-container">
      <div className="form-container-signup">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="header-container">
            <h1 className="header">Sign Up</h1>
          </div>
          <hr />
          <div className="internal-form-container">
            <div>
              <label htmlFor="userId">Name: </label>
            </div>
            <div>
              <input
                name="name"
                onChange={handleChange}
                type="text"
                id="name"
                required
              />
            </div>
          </div>
          <div className="internal-form-container">
            <div>
              <label htmlFor="email">Email: </label>
            </div>
            <div>
              <input
                name="email"
                onChange={handleChange}
                type="email"
                id="email"
                required
              />
            </div>
          </div>
          <div className="internal-form-container">
            <div>
              <label htmlFor="mobileNumber">Mobile Number: </label>
            </div>
            <div>
              <input name="phoneNumber" onChange={handleChange} type="number" id="email" required />
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
            <div>
              <label htmlFor="confirmPassword">Confirm Password: </label>
            </div>
            <div>
              <input name="confirmPassword" onChange={handleChange} type="password" id="confirmPassword" required />
            </div>
          </div>
          <div className="internal-form-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
