/* eslint-disable react/prop-types */

import "./CountryCard.css";
const CountryCard = ({ country }) => {
  console.log(country);
  return (
    <div className=" relative h-[220px]  main  cursor-pointer mb-5">
      <img
        className="h-full w-full object-cover  rounded-lg"
        src={country?.image}
        alt=""
      />

      <div className="card-hover overlay text-3xl text-orange-500 font-bold ">
        <p>{country?.name}</p>
      </div>
    </div>
  );
};

export default CountryCard;
