import { useParams } from "react-router-dom";
import PageTitle from "../../Components/PageTitle/PageTitle";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import Navbar from "../Home/Navbar/Navbar";
import UseAllBlogs from "../../Hooks/UseAllBlogs/UseAllBlogs";
import SkeletonCard from "../../Components/SkeletonCard/SkeletonCard";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";

const UpdatePage = () => {
  //getting current blog id
  const currentBlogId = useParams().id;
  console.log(currentBlogId);
  const [allBlogs, isLoading] = UseAllBlogs();
  const currentBlog = allBlogs?.find((blog) => blog._id === currentBlogId);
  console.log(currentBlog);

  const details = {
    image:
      "https://www.africaodyssey.com/site/odyssey-image-proxy/lodges/cocoa-island=403739-300.jpg",
    title: "Update",
  };

  return (
    <div>
      <ScrollToTop></ScrollToTop>
      {/* this is for title of the  page  */}
      <PageTitle pageDescription="Update"></PageTitle>
      <Navbar></Navbar>
      <PageBanner details={details}></PageBanner>
      <SectionTitle heading="Update the Blog"></SectionTitle>
      {isLoading && (
        <div className="grid gap-x-20 gap-y-16 grid-cols-1 lg:grid-cols-2 px-[10%] my-[5%]">
          <SkeletonCard number={2}></SkeletonCard>
        </div>
      )}
    </div>
  );
};

export default UpdatePage;
