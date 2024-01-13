import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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

  useEffect(() => {
    fetch("places.json")
      .then((res) => res.json())
      .then((data) => {
        setallPlaces(data);
        setActiveIndex(data.length > 0 ? data[0].id : 1);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    // console.log("allPlaces:", allPlaces);
    const place = allPlaces.filter((places) => places.id === activeIndex);
    setfindPlace(place);
  }, [activeIndex, allPlaces]);
  //   console.log(findPlace);

  return (
    <div className="relative h-screen">
      <div className="relative h-screen">
        <img
          className="h-full w-full object-cover"
          src={findPlace[0]?.imageURL}
          alt=""
        />
        <div className=" absolute  top-0 left-0 flex items-center  bg-gradient-to-r from-[rgba(0,0,0,.9)] to-[rgba(0,0,0,0.1)] h-full  w-full pl-[8%]">
          <div>
            <p className="text-7xl text-orange-500 font-semibold ">
              {findPlace[0]?.title}
            </p>
            <p className="text-base text-white w-2/5 my-[2%]">
              {findPlace[0]?.description}
            </p>
            <button className="orange-btn ">Explore</button>
          </div>
        </div>
      </div>
      <div className="absolute top-[52%] right-[5%] px-6  w-auto overflow-hidden">
        <Slider
          {...settings}
          ref={sliderRef}
          className="cursor-pointer  w-[700px]"
        >
          {allPlaces.map((place) => (
            <div key={place?.id} className="">
              <img
                className={`${
                  place?.id === activeIndex ? "border-4 border-orange-400" : ""
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
      </div>
    </div>
  );
};

export default Banner;
