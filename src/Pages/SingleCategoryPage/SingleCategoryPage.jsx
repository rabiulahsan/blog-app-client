import { useLoaderData } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import UseCategories from "../../Hooks/UseCategories/UseCategories";
import PageBanner from "../../Shared/PageBanner/PageBanner";

const SingleCategoryPage = () => {
  // get blogs for this categories
  const loadedData = useLoaderData();

  //get current category
  const currentCategory = loadedData[0].category;

  //get all categories
  const [categories] = UseCategories();

  //   get current categories details for pagebanner section
  const currentCategoryDetails = categories.filter(
    (category) => category.name === currentCategory
  );
  //   console.log(currentCategoryDetails);

  return (
    <div>
      <Navbar></Navbar>
      <PageBanner details={currentCategoryDetails[0]}></PageBanner>
    </div>
  );
};

export default SingleCategoryPage;
