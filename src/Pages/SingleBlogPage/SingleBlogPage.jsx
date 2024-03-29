/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import Navbar from "../Home/Navbar/Navbar";
import Trending from "../../Shared/Trending/Trending";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import useAuth from "../../Hooks/UseAuth/UseAuth";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure/UseAxiosSecure";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import ScrollProgressBar from "../../Components/ScrollProgressBar/ScrollProgressBar";

const SingleBlogPage = () => {
  //get the for specific this id which is given in router.jsx
  const loadedData = useLoaderData();
  const { user } = useAuth();
  const [isLike, setIsLike] = useState(false);
  const [axiosSecure] = UseAxiosSecure();
  const {
    _id,
    writer,
    image,
    placeName,
    location,
    description,
    category,
    country,
  } = loadedData;
  console.log(loadedData);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosSecure.get(
        `/favourites?email=${user?.email}`
      );
      const savedData = response.data.filter((data) => data.blogsID === _id);
      setIsLike(savedData.some((data) => data.saved));
    };

    fetchData();
  }, [_id, user, axiosSecure]);

  //create object for pagebanner section
  const details = {
    image: loadedData?.image,
    title: loadedData?.placeName,
  };

  // for swal notification
  const Toast = Swal.mixin({
    toast: true,
    position: "top-right",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  //for posting the saved data to database
  const handleFavourite = () => {
    const savedData = {
      savesUserEmail: user?.email,
      blogsID: _id,
      image,
      placeName,
      location,
      description,
      category,
      country,
      saved: true,
    };
    // console.log(savedData);
    axiosSecure.post("/favourites", savedData).then((data) => {
      if (data.data.insertedId) {
        Toast.fire({
          icon: "success",
          title: "Saved in favourite successfully",
        });
        setIsLike(!isLike);
      }
    });
  };

  //for delting the saved one from favourite
  const handleFavouriteDelete = () => {
    axiosSecure.delete(`/favourites/${_id}`).then((data) => {
      // console.log(data.data);
      if (data.data.deletedCount) {
        Toast.fire({
          icon: "error",
          title: "Removed from favourite",
        });
        setIsLike(!isLike);
      }
    });
  };

  return (
    <div>
      {/* this is for scroll to top after coming this page  */}
      <ScrollToTop></ScrollToTop>
      <PageTitle pageDescription={placeName}></PageTitle>
      <Navbar></Navbar>
      <ScrollProgressBar></ScrollProgressBar>
      <PageBanner details={details}></PageBanner>
      <div className="my-[3%] flex  justify-center items-center ">
        <div className="w-1/2">
          <img
            className="h-[450px] w-full mx-auto "
            src={loadedData?.image}
            alt=""
          />
          <div className="flex justify-between items-center px-[5%] mt-3">
            <div className="flex gap-x-10 text-orange-500 text-sm ">
              <p>{category}</p>
              <p>{location}</p>
              <p>{country}</p>
            </div>
            {user ? (
              <div className="text-red-600">
                {isLike ? (
                  <span
                    onClick={handleFavouriteDelete}
                    className="text-2xl font-bold cursor-pointer"
                    title="Add on Favorite"
                  >
                    <FaHeart></FaHeart>
                  </span>
                ) : (
                  <span
                    onClick={handleFavourite}
                    className="text-2xl font-bold cursor-pointer"
                    title="Add on Favorite"
                  >
                    <FaRegHeart></FaRegHeart>
                  </span>
                )}
              </div>
            ) : (
              <p className="text-gray-500 text-base font-semibold hover:underline hover:text-orange-400">
                <Link to="/login">Login for save this blog</Link>
              </p>
            )}
          </div>
          <p className="mt-[3%] mb-[1%] text-center text-4xl font-bold text-gray-700">
            {loadedData?.placeName}
          </p>
          <p className="text-center text-gray-700">By {loadedData?.writer}</p>
        </div>
      </div>
      <p className="px-[12%] w-2/3 text-lg text-gray-600 text-center mx-auto leading-10">
        {loadedData?.description}
      </p>
      <Trending></Trending>
    </div>
  );
};

export default SingleBlogPage;
