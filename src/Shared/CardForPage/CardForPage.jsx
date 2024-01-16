/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./CardForPage.css";
import { motion } from "framer-motion";

const CardForPage = ({ details }) => {
  // console.log(details);
  const { image, title, name, countryName } = details;
  // name for url
  // title for display

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
      {/* <FadeAnimations direction="up" delay={0.3} once={true}> */}
      <div className=" relative h-[240px]  main  cursor-pointer my-5">
        {/* created dynamic link for category and country page  */}
        <Link to={name ? `/categories/${name}` : `/countries/${countryName}`}>
          <img
            className="h-full w-full object-cover  rounded-lg mb-3"
            src={image}
            alt=""
          />
          <p className="text-center text-gray-700 text-2xl font-bold">
            {title}
          </p>

          <div className="card-hover overlay ">
            <div className=" px-8">
              <p className=" text-2xl text-orange-500 font-bold text-center mb-3">
                {title}
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* </FadeAnimations> */}
    </motion.div>
  );
};

export default CardForPage;
