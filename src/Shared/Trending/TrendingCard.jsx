/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Card.css";
import { motion } from "framer-motion";

const TrendingCard = ({ place }) => {
  // console.log(place);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  // this is for animation
  const items = {
    initial: {
      y: "100",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div variants={items}>
      <div className=" relative h-[260px]  main  cursor-pointer my-[5%]">
        <Link onClick={handleClick} to={`/${place?._id}`}>
          <img
            className="h-full w-full object-cover  rounded-lg mb-3"
            src={place?.image}
            alt=""
          />
          <p className="text-center text-gray-700 text-xl font-bold mb-3">
            {place?.placeName}
          </p>

          <div className="card-hover overlay ">
            <div className=" px-8">
              <p className=" text-xl text-orange-500 font-bold text-center mb-3">
                {place?.location}
              </p>
              <p className="text-white text-center text-sm ">
                {place?.description.slice(0, 80) + "..."}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default TrendingCard;
