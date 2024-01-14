/* eslint-disable react/prop-types */
import "./CategoryCard.css";

const CategoryCard = ({ category }) => {
  console.log(category);

  return (
    <div className=" relative h-[220px]  main  cursor-pointer mb-5">
      <img
        className="h-full w-full object-cover  rounded-lg"
        src={category?.image}
        alt=""
      />

      <div className="card-hover overlay text-3xl text-orange-500 font-bold ">
        <p>{category?.name}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
