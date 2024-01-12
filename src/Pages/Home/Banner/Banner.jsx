import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";

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

  const [allItems, setAllItems] = useState([]);
  const [findItem, setFindItem] = useState([]);

  useEffect(() => {
    fetch("places.json")
      .then((res) => res.json())
      .then((data) => {
        setAllItems(data);
        setActiveIndex(data.length > 0 ? data[0].id : 1);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    // console.log("allItems:", allItems);
    const item = allItems.filter((items) => items.id === activeIndex);
    setFindItem(item);
  }, [activeIndex, allItems]);
  console.log(findItem);

  return (
    <div className="relative h-screen">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <img
          className="h-full w-full object-cover"
          src={findItem[0]?.imageURL}
          alt=""
        />
      </div>
      <div className="absolute top-[48%] right-[5%] px-6  w-auto overflow-hidden">
        <Slider
          {...settings}
          ref={sliderRef}
          className="cursor-pointer  w-[700px]"
        >
          {allItems.map((item) => (
            <div key={item?.id} className="">
              <img
                className={`${
                  item?.id === activeIndex ? "border-4 border-orange-400" : ""
                } !w-[160px] h-[230px] object-cover  rounded-lg`}
                src={item?.imageURL}
                alt=""
              />
            </div>
          ))}
        </Slider>
        <div className="flex justify-start items-center gap-6 my-5">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="previous bg-orange-500 font-bold px-5 py-2 text-base rounded text-white"
          >
            &lt;
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="next bg-orange-500 font-bold px-5 py-2 text-base rounded text-white"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
