import { Link } from "react-router-dom";
import HoverOverlayButton from "../../Components/HoverOverlayButton/HoverOverlayButton";
import FadeAnimations from "../FadeAnimations/FadeAnimations";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */

const BlogsCardFavourite = ({ place }) => {
  console.log(place?.blogID);

  const { blogID, image, placeName, location, description, category, country } =
    place;

  return (
    <FadeAnimations direction="up" once={true} delay={0.4} duration={0.4}>
      <div className="mb-[5%]">
        <img
          className="h-[280px] my-3 rounded-lg"
          src={image}
          alt={placeName}
        />
        <p className="text-gray-700 font-bold text-2xl text-center mb-2">
          {placeName}
        </p>
        <div className="flex justify-around items-center text-sm text-orange-500 mb-2">
          <p>{category}</p>
          <p>{location}</p>
          <p>{country}</p>
        </div>
        {/* <p className="text-center">{description.slice(0, 120) + "..."}</p> */}
        <div className="flex justify-center items-center mt-3">
          <Link to={`/${place?.blogID}`}>
            <HoverOverlayButton btnName="Read More" />
          </Link>
        </div>
      </div>
    </FadeAnimations>
  );
};

export default BlogsCardFavourite;
