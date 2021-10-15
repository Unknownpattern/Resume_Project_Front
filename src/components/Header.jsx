import { Fragment } from "react";
import { Link } from "react-router-dom";

const Header = ({ isAuth }) => {
   return (
      <Fragment>
         <h1>App name</h1>
         <ul className="nav">
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to={isAuth ? "/dashboard" : "/login"}>{isAuth ? "Dashboard" : "Login"}</Link>
            </li>
         </ul>
      </Fragment>
   );
};

export default Header;
