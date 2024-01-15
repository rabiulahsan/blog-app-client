import { useParams } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import UseCategories from "../../Hooks/UseCategories/UseCategories";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import UseAllBlogs from "../../Hooks/UseAllBlogs/UseAllBlogs";
import BlogsCard from "../../Shared/BlogsCard/BlogsCard";

const SingleCategoryPage = () => {
  //getting current category name
  const currentCountry = useParams().category;
  // console.log(currentCountry);

  //getting all blogs
  const [allBlogs] = UseAllBlogs();
  // console.log(allBlogs);

  // getting all categories
  const [categories] = UseCategories();
  // console.log(categories);

  //getting all current categories blogs
  const currentCategoryBlogs = allBlogs?.filter(
    (blog) => blog?.category === currentCountry
  );
  // console.log(currentCategoryBlogs);

  //getting deatils of current category for page banner
  const currentCategoryDetails = categories?.filter(
    (category) => category?.name === currentCountry
  );
  // console.log(currentCategoryDetails);

  return (
    <div>
      <Navbar></Navbar>
      <PageBanner details={currentCategoryDetails[0]}></PageBanner>

      {/* this is for specific place card  */}
      <div className="grid gap-x-20 gap-y-16 grid-cols-1 lg:grid-cols-3 px-[10%]  ">
        {currentCategoryBlogs?.map((place) => (
          <BlogsCard key={place.index} place={place}></BlogsCard>
        ))}
      </div>
    </div>
  );
};

export default SingleCategoryPage;
