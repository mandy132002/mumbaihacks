
import "./App.css";
import Login from "./Components/Citizen/Login.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GovernmentHome from "./Components/Government/GovernmentHome";
import CitizenHome from "./Components/Citizen/CitizenHome";
import KnownIssueCard from "./Components/Citizen/KnownIssueCard";

function App() {
  return (
    <>
    <KnownIssueCard/>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/government' element={<GovernmentHome/>}/>
          <Route exact path='/citizen' element={<CitizenHome/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
