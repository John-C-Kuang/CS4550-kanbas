import {Link, useLocation} from "react-router-dom";

function SubNav() {
  const { pathname } = useLocation();
  return (
      <nav className="nav nav-tabs mt-2">
        <Link to="/Project/home"
              className={`nav-link`}>Home</Link>
        <Link to="/Project/search"
              className={`nav-link`}>Search</Link>
        <Link to="/Project/signin"
              className={`nav-link`}>Sign in</Link>
        <Link to="/Project/signup"
              className={`nav-link`}>Sign up</Link>
        <Link to="/Project/account"
              className={`nav-link`}>Account</Link>
      </nav>
  );
}

export default SubNav;
