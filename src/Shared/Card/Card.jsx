/* eslint-disable react/prop-types */
import "./Card.css";
const Card = ({ place }) => {
  // console.log(place);
  return (
    <div className=" relative h-[280px]  main  cursor-pointer my-5">
      <img
        className="h-full w-full object-cover  rounded-lg mb-3"
        src={place?.image}
        alt=""
      />
      <p className="text-center text-gray-700 text-2xl font-bold">
        {place?.placeName}
      </p>

      <div className="card-hover overlay ">
        <div className=" px-8">
          <p className=" text-2xl text-orange-500 font-bold text-center mb-3">
            {place?.location}
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
