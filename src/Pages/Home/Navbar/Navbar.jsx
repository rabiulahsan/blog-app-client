/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import ActiveLink from "../../../Components/ActiveLink/ActiveLink";
import "./Navbar.css";
import HoverOverlayButton from "../../../Components/HoverOverlayButton/HoverOverlayButton";
import useAuth from "../../../Hooks/UseAuth/UseAuth";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const { logOut, user } = useAuth();
  // console.log(user);
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  //if searchvalue is empty then return nothing
  const handleSearch = () => {
    if (searchValue) {
      navigate(`/search/${searchValue}`);
    } else {
      return;
    }
  };

  // functon for logout
  const handleLogOut = () => {
    logOut()
      .then(navigate("/"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="sticky top-0 left-0 z-50">
      <div className="flex justify-between items-center w-full absolute top-0 left-0  bg-[rgba(0,0,0,0.6)] py-3 px-[5%] text-white">
        <Link to="/">
          <p className="text-3xl text-orange-500 font-extrabold">Explorer</p>
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
                <ActiveLink to="/categories">Categories</ActiveLink>
              </span>
            </li>
            <li className="navlink-hover">
              <span>
                <ActiveLink to="/favourites">Favourites</ActiveLink>
              </span>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="search"
              className=" border border-orange-500 px-3 py-[7px] bg-transparent rounded-l focus:outline-none "
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button
              className="bg-orange-500 p-3 cursor-pointer rounded-r"
              onClick={handleSearch}
            >
              <FaSearch></FaSearch>
            </button>
          </div>

          {user ? (
            <>
              <img
                className="h-[40px] rounded-[50%]"
                src={user?.photoURL}
                alt=""
              />
              <p onClick={handleLogOut}>
                <HoverOverlayButton btnName="Logout"></HoverOverlayButton>
              </p>
            </>
          ) : (
            <Link to="/login">
              <HoverOverlayButton btnName="Join Us"></HoverOverlayButton>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
