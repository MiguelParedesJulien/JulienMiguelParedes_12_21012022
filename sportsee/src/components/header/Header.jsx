import logo from "../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import "./header.css";

function Header() {
    return (
      <header>
        <NavLink exact to="/">
          <div className="logo-container">
            <img src={logo} alt="logo" />
          </div>
        </NavLink>
        <Navigation />
      </header>
    );
  }
  
  export default Header;