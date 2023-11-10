import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Employee from "../function-components/Employee";
import Skill from "../pages/Skill";
import AddEmployee from '../pages/Add-employee';
import ErrorPage from '../pages/ErrorPage'
import Profile from '../pages/Profile';
import Login from '../function-components/Login';

function Header() {

  function Logout() {
    localStorage.clear();
  }

  return (
    <BrowserRouter>
      <div className=" text-dark">
        <nav>
          <ul className="d-flex p-2 list-unstyled">
            <li className="mx-3">
              <Link to="/employee">Employee</Link>
            </li>
            <li className="mx-3">
              <Link to="/add">Add Employee</Link>
            </li>
            <li className="mx-3">
              <Link to="/skill">Add Skills</Link>
            </li>
            <li className="logoutBtn float-end mt-1">
              <Link to="/login" onClick={Logout()}>Logout</Link>
            </li>
          </ul>

        </nav>
        <hr />


        <Routes>
          <Route extra path="/" element={<Employee />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="employee/profile/:id" element={<Profile />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/error" element={<ErrorPage />} />

        </Routes>
      </div>
    </BrowserRouter>

  )
}


export default Header;
