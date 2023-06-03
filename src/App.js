
import "./App.css";
import Login from "./Components/Citizen/Login";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GovernmentHome from "./Components/Government/GovernmentHome";
import CitizenHome from "./Components/Citizen/CitizenHome";
import Signup from "./Components/Citizen/Signup";
import Report from "./Components/Citizen/Report";
import KnownIssueCard from "./Components/Citizen/KnownIssueCard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/report' element={<Report/>}/>
          <Route exact path='/test' element={<Report/>}/>
          <Route exact path='/government' element={<GovernmentHome/>}/>
          <Route exact path='/citizen' element={<CitizenHome/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
