import { Link } from "react-router-dom";
import ActiveLink from "../../../Components/ActiveLink/ActiveLink";
import "./Navbar.css";
import HoverOverlayButton from "../../../Components/HoverOverlayButton/HoverOverlayButton";
import useAuth from "../../../Hooks/UseAuth/UseAuth";

const Navbar = () => {
  const { logOut, user } = useAuth();
  // console.log(user);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className="sticky top-0 left-0 z-50">
      <div className="flex justify-between items-center w-full absolute top-0 left-0  bg-[rgba(0,0,0,0.6)] py-3 px-[5%] text-white">
        <Link to="/">
          <p className="text-3xl text-orange-600 font-extrabold">Explorer</p>
        </Link>
        <div className="">
          <ul className="flex text-lg font-semibold">
            <li className="navlink-hover">
              <span>
                <ActiveLink to="/blogs">Blogs</ActiveLink>
              </span>
            </li>
            <li className="navlink-hover">
              <span>
                <ActiveLink to="/countries">Countries</ActiveLink>
              </span>
            </li>
            <li className="navlink-hover">
              <span>
                <ActiveLink to="/categories">Categoires</ActiveLink>
              </span>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-x-5">
          <img className="h-[40px] rounded-[50%]" src={user?.photoURL} alt="" />
          {user ? (
            <p onClick={handleLogOut}>
              <HoverOverlayButton btnName="Logout"></HoverOverlayButton>
            </p>
          ) : (
            <Link to="/login">
              <HoverOverlayButton btnName="Become Writer?"></HoverOverlayButton>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
