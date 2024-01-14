/* eslint-disable react/prop-types */
import "./CategoryCard.css";

const CategoryCard = ({ details }) => {
  // console.log(details);
  return (
    <div className=" relative h-[220px]  main  cursor-pointer mb-5">
      <img
        className="h-full w-full object-cover  rounded-lg"
        src={details?.image}
        alt=""
      />

      <div className="card-hover overlay text-3xl text-orange-500 font-bold ">
        <p>{details?.name}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
