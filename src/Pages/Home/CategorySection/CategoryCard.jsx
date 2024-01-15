/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./CategoryCard.css";

const CategoryCard = ({ details }) => {
  // console.log(details);
  const { image, title, name } = details;
  // name for url
  // title for display

  return (
    <div className=" relative h-[220px]  main  cursor-pointer mb-5">
      <Link to={`/categories/${name}`}>
        <img
          className="h-full w-full object-cover  rounded-lg"
          src={image}
          alt=""
        />

        <div className="card-hover overlay text-3xl text-orange-500 font-bold ">
          <p>{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
