import { Link } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth/UseAuth";
import FadeAnimations from "../../Shared/FadeAnimations/FadeAnimations";
import HoverOverlayButton from "../../Components/HoverOverlayButton/HoverOverlayButton";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

/* eslint-disable react/prop-types */
const MyBlogsCard = ({ place }) => {
  const { user } = useAuth();
  // console.log(place);

  const {
    _id,
    email,
    image,
    placeName,
    location,
    description,
    category,
    country,
  } = place;

  return (
    <FadeAnimations direction="up" once={true} delay={0.4} duration={0.4}>
      <div className=" mb-[5%]">
        <img
          className="h-[280px] my-3 rounded-lg"
          src={image}
          alt={placeName}
        />
        <p className="text-gray-700 font-bold text-2xl text-center mb-2">
          {placeName}
        </p>
        <div className="flex justify-around items-center text-sm text-orange-500 mb-2">
          <p>{category}</p>
          <p>{location}</p>
          <p>{country}</p>
        </div>
        <p className="text-center">{description.slice(0, 120) + "..."}</p>
        <div className="flex justify-center items-center mt-3 gap-x-4">
          <Link to={`/${_id}`}>
            <HoverOverlayButton btnName="Read More"></HoverOverlayButton>
          </Link>

          {user?.email === email ? (
            <>
              <span className="bg-[#322F4B] text-white text-lg font-semibold p-[11px] rounded cursor-pointer hover:bg-orange-500 duration-300">
                <Link>
                  <FaEdit></FaEdit>
                </Link>
              </span>
              <span className="bg-[#322F4B] text-white text-lg font-semibold p-[11px] rounded cursor-pointer hover:bg-orange-500 duration-300">
                <Link>
                  <MdDelete></MdDelete>
                </Link>
              </span>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </FadeAnimations>
  );
};

export default MyBlogsCard;
