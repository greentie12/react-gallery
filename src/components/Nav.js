import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/search/sking">Sking</NavLink>
        </li>
        <li>
          <NavLink to="/search/surfing">Surfing</NavLink>
        </li>
        <li>
          <NavLink to="/search/hiking">Hiking</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
