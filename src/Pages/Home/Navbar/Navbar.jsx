/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import ActiveLink from "../../../Components/ActiveLink/ActiveLink";
import "./Navbar.css";
import HoverOverlayButton from "../../../Components/HoverOverlayButton/HoverOverlayButton";
import useAuth from "../../../Hooks/UseAuth/UseAuth";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

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

  //for search button style
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    // const x = e.pageX - e.currentTarget.offsetLeft;
    // const y = e.pageY - e.currentTarget.offsetTop;

    //it is used for specify the target element
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoordinates({ x, y });

    // console.log(e);
  };
  const buttonStyles = {
    "--before-top": `${coordinates.y}px`,
    "--before-left": `${coordinates.x}px`,
  };
  // console.log(buttonStyles);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("places.json")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      {!isLoading && (
        <div className="sticky top-0 left-0 z-50">
          <div className="flex justify-between items-center w-full absolute top-0 left-0  bg-[rgba(0,0,0,0.6)] py-3 px-[5%] text-white">
            <Link to="/">
              <p className="text-3xl text-orange-500 font-extrabold">
                Explorer
              </p>
            </Link>
            <div className="">
              <ul className="flex text-[17px] font-semibold">
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

                {user ? (
                  <>
                    <li className="navlink-hover">
                      <span>
                        <ActiveLink to="/favourites">Favourites</ActiveLink>
                      </span>
                    </li>
                    <li className="navlink-hover">
                      <span>
                        <ActiveLink to="/write">Write</ActiveLink>
                      </span>
                    </li>
                    <li className="navlink-hover">
                      <span>
                        <ActiveLink to="/myblogs">My Blogs</ActiveLink>
                      </span>
                    </li>
                  </>
                ) : (
                  ""
                )}
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
                  onMouseMove={(e) => handleMouseMove(e)}
                  style={buttonStyles}
                  className="  button p-3  font-semibold text-base rounded-r text-white inline-flex relative overflow-hidden bg-orange-500 "
                  onClick={handleSearch}
                >
                  <span className="z-20">
                    <FaSearch></FaSearch>
                  </span>
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
                  <HoverOverlayButton btnName="Become a Writer?"></HoverOverlayButton>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
