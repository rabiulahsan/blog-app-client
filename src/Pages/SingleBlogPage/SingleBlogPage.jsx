import { useLoaderData } from "react-router-dom";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import Navbar from "../Home/Navbar/Navbar";
import Trending from "../../Shared/Trending/Trending";

const SingleBlogPage = () => {
  //get the for specific this id which is given in router.jsx
  const loadedData = useLoaderData();

  const { _id, image, placeName, location, description, category, country } =
    loadedData;
  console.log(loadedData);

  //create object for pagebanner section
  const details = {
    image,
    name: placeName,
  };
  return (
    <div>
      <Navbar></Navbar>
      <PageBanner details={details}></PageBanner>
      <Trending></Trending>
    </div>
  );
};

export default SingleBlogPage;
