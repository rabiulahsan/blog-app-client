import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./Banner.css";
import FadeAnimations from "../../../Shared/FadeAnimations/FadeAnimations";
import { Link } from "react-router-dom";
import SkeletonCard from "../../../Components/SkeletonCard/SkeletonCard";

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  //it is for explore button
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const x = e.pageX - e.currentTarget.offsetLeft;
    const y = e.pageY - e.currentTarget.offsetTop;

    setCoordinates({ x, y });
  };
  const buttonStyles = {
    "--before-top": `${coordinates.y}px`,
    "--before-left": `${coordinates.x}px`,
  };

  const sliderRef = useRef(null);

  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    // dots: true,
    arrows: false,
    afterChange: (index) => {
      setActiveIndex(index + 1);
      console.log(index + 1);
    },
  };

  const [allPlaces, setallPlaces] = useState([]);
  const [findPlace, setfindPlace] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("places.json")
      .then((res) => res.json())
      .then((data) => {
        setallPlaces(data);
        setActiveIndex(data.length > 0 ? data[0].id : 1);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const place = allPlaces.filter((places) => places.id === activeIndex);
    setfindPlace(place);
  }, [activeIndex, allPlaces]);

  return (
    <div className="relative h-screen">
      <div className="relative h-screen">
        {isLoading ? (
          <div className="grid gap-x-20 gap-y-16 grid-cols-1 lg:grid-cols-1 px-[10%] my-[5%]">
            <SkeletonCard number={1}></SkeletonCard>
          </div>
        ) : (
          <img
            className="h-full w-full object-cover"
            src={findPlace[0]?.imageURL}
            alt=""
          />
        )}

        {isLoading ? (
          <div className="grid gap-x-20 gap-y-16 grid-cols-1 lg:grid-cols-1 px-[10%] my-[5%]">
            <SkeletonCard number={1}></SkeletonCard>
          </div>
        ) : (
          <div className=" absolute  top-0 left-0 flex items-center  bg-gradient-to-r from-[rgba(0,0,0,.9)] to-[rgba(0,0,0,0.1)] h-full  w-full pl-[8%]">
            <FadeAnimations
              delay={0.5}
              direction="right"
              once={false}
              duration={0.7}
            >
              <p className="text-7xl text-orange-500 font-semibold ">
                {findPlace[0]?.title}
              </p>
              <p className="text-base text-white w-2/5 my-[2%]">
                {findPlace[0]?.description}
              </p>

              {/* button with hover effect  */}
              <button
                onMouseMove={(e) => handleMouseMove(e)}
                style={buttonStyles}
                className=" button px-6 py-2 font-semibold text-lg rounded text-white inline-flex relative overflow-hidden bg-orange-500 "
              >
                <Link to="/blogs">
                  <span className="relative z-10">Explorer</span>
                </Link>
              </button>
            </FadeAnimations>
          </div>
        )}
      </div>
      {!isLoading && (
        <div className="absolute top-[52%] right-[5%] px-6  w-auto overflow-hidden">
          <FadeAnimations
            delay={0.5}
            direction="left"
            once={false}
            duration={0.7}
          >
            <Slider
              {...settings}
              ref={sliderRef}
              className="cursor-pointer  w-[700px]"
            >
              {allPlaces.map((place) => (
                <div key={place?.id} className="">
                  <img
                    className={`${
                      place?.id === activeIndex
                        ? "border-4 border-orange-400"
                        : ""
                    } !w-[160px] h-[230px] object-cover  rounded-lg`}
                    src={place?.imageURL}
                    alt=""
                  />
                </div>
              ))}
            </Slider>

            <div className="flex justify-start places-center gap-6 my-5">
              <button
                onClick={() => sliderRef.current.slickPrev()}
                className="previous "
              >
                <p className="orange-btn ">
                  <AiOutlineLeft></AiOutlineLeft>
                </p>
              </button>
              <button
                onClick={() => sliderRef.current.slickNext()}
                className="next "
              >
                <p className="orange-btn ">
                  <AiOutlineRight></AiOutlineRight>
                </p>
              </button>
            </div>
          </FadeAnimations>
        </div>
      )}
    </div>
  );
};

export default Banner;
