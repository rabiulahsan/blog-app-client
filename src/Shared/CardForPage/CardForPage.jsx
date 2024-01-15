/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./CardForPage.css";

const CardForPage = ({ details }) => {
  // console.log(details);
  const { image, title, name } = details;

  return (
    <div className=" relative h-[260px]  main  cursor-pointer my-5">
      <Link to={name ? `/categories/${name}` : `/countries/${title}`}>
        <img
          className="h-full w-full object-cover  rounded-lg mb-3"
          src={image}
          alt=""
        />
        <p className="text-center text-gray-700 text-2xl font-bold">{title}</p>

        <div className="card-hover overlay ">
          <div className=" px-8">
            <p className=" text-2xl text-orange-500 font-bold text-center mb-3">
              {title}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardForPage;
