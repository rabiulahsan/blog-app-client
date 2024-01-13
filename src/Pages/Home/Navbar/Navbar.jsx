import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full absolute top-0 left-0 z-50 bg-transparent py-[1%] px-[5%] text-white">
      <div className="flex justify-between items-center">
        <Link to="/">
          <p className="text-3xl text-orange-600 font-extrabold">Explorer</p>
        </Link>
        <div className="">menu</div>
        <div className="">profile</div>{" "}
      </div>
    </div>
  );
};

export default Navbar;
