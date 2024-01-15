/* eslint-disable react/prop-types */
import "./CardForPage.css";

const CardForPage = ({ details }) => {
  // console.log(details);
  const { image, name } = details;

  return (
    <div className=" relative h-[260px]  main  cursor-pointer my-5">
      <img
        className="h-full w-full object-cover  rounded-lg mb-3"
        src={image}
        alt=""
      />
      <p className="text-center text-gray-700 text-2xl font-bold">{name}</p>

      <div className="card-hover overlay ">
        <div className=" px-8">
          <p className=" text-3xl text-orange-500 font-bold text-center mb-3">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardForPage;
