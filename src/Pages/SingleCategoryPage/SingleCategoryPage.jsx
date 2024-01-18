import { useParams } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import UseCategories from "../../Hooks/UseCategories/UseCategories";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import UseAllBlogs from "../../Hooks/UseAllBlogs/UseAllBlogs";
import BlogsCard from "../../Shared/BlogsCard/BlogsCard";
import SkeletonCard from "../../Components/SkeletonCard/SkeletonCard";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import PageTitle from "../../Components/PageTitle/PageTitle";

const SingleCategoryPage = () => {
  //getting current category name
  const currentCategory = useParams().category;
  // console.log(currentCountry);

  //getting all blogs
  const [allBlogs, isLoading] = UseAllBlogs();
  // console.log(allBlogs);

  // getting all categories
  const [categories] = UseCategories();
  // console.log(categories);

  //getting all current categories blogs
  const currentCategoryBlogs = allBlogs?.filter(
    (blog) => blog?.category === currentCategory
  );
  // console.log(currentCategoryBlogs);

  //getting deatils of current category for page banner
  const currentCategoryDetails = categories?.filter(
    (category) => category?.name === currentCategory
  );
  // console.log(currentCategoryDetails);

  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <PageTitle pageDescription={currentCategory}></PageTitle>
      <Navbar></Navbar>
      <PageBanner details={currentCategoryDetails[0]}></PageBanner>

      {/* this is for specific place card  */}
      <div className="grid gap-x-20 gap-y-16 grid-cols-1 lg:grid-cols-3 px-[10%]  ">
        {/* this id for skeleton */}
        {isLoading && <SkeletonCard number={16}></SkeletonCard>}
        {currentCategoryBlogs?.map((place) => (
          <BlogsCard key={place.index} place={place}></BlogsCard>
        ))}
      </div>
    </div>
  );
};

export default SingleCategoryPage;
