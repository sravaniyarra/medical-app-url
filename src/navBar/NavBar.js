import { Link } from 'react-router-dom';
import './NavBar.css'
import { FaHome } from "react-icons/fa";
import { FcBusinessContact } from "react-icons/fc";
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-end">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Zenius HealthCare</Link>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home <FaHome/></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/specialities">Specialities </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/doctors">Our Doctors </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bookApp">Book An Appointment </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">Contact Us <FcBusinessContact/></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar