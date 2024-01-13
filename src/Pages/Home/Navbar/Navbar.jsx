import { Link } from "react-router-dom";
import ActiveLink from "../../../Components/ActiveLink/ActiveLink";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="w-full absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.3)] py-[1%] px-[5%] text-white">
      <div className="flex justify-between items-center">
        <Link to="/">
          <p className="text-3xl text-orange-600 font-extrabold">Explorer</p>
        </Link>
        <div className="">
          <ul className="flex text-lg font-semibold">
            <li className="navlink-hover">
              <span>
                <ActiveLink to="/">Blogs</ActiveLink>
              </span>
            </li>
            <li className="navlink-hover">
              <span>
                <ActiveLink to="/countries">Country</ActiveLink>
              </span>
            </li>
            <li className="navlink-hover">
              <span>
                <ActiveLink to="/categories">Categoires</ActiveLink>
              </span>
            </li>
          </ul>
        </div>
        <div className="">
          <Link to="/">
            <button className="orange-small-btn">Become Writer?</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
