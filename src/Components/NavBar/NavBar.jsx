import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const customClass = ({ isActive }) => {
    return "menu__link" + (isActive ? " menu__link_active" : "");
  };
  return (
    <nav className="menu">
      <NavLink to="/" className={customClass}>
        Home
      </NavLink>
      <NavLink to="/about" className={customClass}>
        Asthma
      </NavLink>
      <NavLink to="/triggers" className={customClass}>
        Triggers
      </NavLink>
      <NavLink to="/symptoms" className={customClass}>
        Symptoms
      </NavLink>
      <NavLink to="/treatment" className={customClass}>
        Treatment
      </NavLink>
    </nav>
  );
}

export default NavBar;
