
import "./App.css";
import Login from "./Components/Citizen/Login.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GovernmentHome from "./Components/Government/GovernmentHome";
import CitizenHome from "./Components/Citizen/CitizenHome";
<<<<<<< HEAD
import KnownIssueCard from "./Components/Citizen/KnownIssueCard";

=======
import Signup from "./Components/Citizen/Signup";
import Report from "./Components/Citizen/Report";
>>>>>>> d97b0f96b70e2647b3c5c30930fcc0dce3dff2a8
function App() {
  return (
    <>
    <KnownIssueCard/>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/report' element={<Report/>}/>
          <Route exact path='/government' element={<GovernmentHome/>}/>
          <Route exact path='/citizen' element={<CitizenHome/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
