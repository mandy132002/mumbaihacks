import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Citizen/Login.jsx";
import Signup from "./Components/Citizen/Signup.jsx";
import Navbar from "./Components/Citizen/Navbar.jsx";
import Report from "./Components/Citizen/Report.jsx";
import { fireEvent } from "@testing-library/react";

function App() {
  return (
    <div>
      <Navbar />
      <Report />
    </div>
  );
}

export default App;
