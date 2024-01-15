import { useLoaderData } from "react-router-dom";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import Navbar from "../Home/Navbar/Navbar";
import Trending from "../../Shared/Trending/Trending";
import { FaRegHeart } from "react-icons/fa";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";

const SingleBlogPage = () => {
  //get the for specific this id which is given in router.jsx
  const loadedData = useLoaderData();

  const { writer, image, placeName, location, description, category, country } =
    loadedData;
  console.log(loadedData);

  //create object for pagebanner section
  const details = {
    image,
    title: placeName,
  };
  return (
    <div>
      {/* this is for scroll to top after coming this page  */}
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <PageBanner details={details}></PageBanner>
      <div className="my-[3%] flex  justify-center items-center ">
        <div className="w-1/2">
          <img className="h-[450px] w-full mx-auto " src={image} alt="" />
          <div className="flex justify-between items-center px-[5%] mt-3">
            <div className="flex gap-x-10 text-orange-500 text-sm ">
              <p>{category}</p>
              <p>{location}</p>
              <p>{country}</p>
            </div>
            <div className="text-red-600">
              <span
                className="text-xl font-bold cursor-pointer"
                title="Add on Favorite"
              >
                <FaRegHeart></FaRegHeart>
              </span>
            </div>
          </div>
          <p className="mt-[3%] mb-[1%] text-center text-4xl font-bold text-gray-700">
            {placeName}
          </p>
          <p className="text-center text-gray-700">By {writer}</p>
        </div>
      </div>
      <p className="px-[12%] w-2/3 text-lg text-gray-600 text-center mx-auto leading-10">
        {description}
      </p>
      <Trending></Trending>
    </div>
  );
};

export default SingleBlogPage;
