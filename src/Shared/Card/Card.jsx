/* eslint-disable react/prop-types */
import "./Card.css";
const Card = ({ place }) => {
  console.log(place);
  return (
    <div className=" relative h-[280px]  main  cursor-pointer mb-5">
      <img
        className="h-full w-full object-cover  rounded-lg"
        src={place?.image}
        alt=""
      />

      <div className="card-hover overlay ">
        <div className=" px-5">
          <p className=" text-2xl text-orange-500 font-bold text-center ">
            {place?.placeName}
          </p>
          <p className="text-white text-center text-sm">
            {place?.description.slice(0, 100) + "..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
