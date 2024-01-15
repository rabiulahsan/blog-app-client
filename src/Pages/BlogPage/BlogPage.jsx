import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import UseAllBlogs from "../../Hooks/UseAllBlogs/UseAllBlogs";
import BlogsCard from "../../Shared/BlogsCard/BlogsCard";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import Navbar from "../Home/Navbar/Navbar";
import PageTitle from "../../Components/PageTitle/PageTitle";
import SkeletonCard from "../../Components/SkeletonCard/SkeletonCard";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";

const BlogPage = () => {
  //getting all blogs data
  const [allBlogs, isLoading] = UseAllBlogs();

  const details = {
    image: "https://sb.ecobnb.net/app/uploads/sites/3/2022/04/copertina-1.jpg",
    title: "Blogs",
  };
  return (
    <div className="mb-[5%]">
      {/* this is for scroll to top after coming this page  */}
      <ScrollToTop></ScrollToTop>
      {/* this is for title of the  page  */}
      <PageTitle pageDescription="Blogs"></PageTitle>
      <Navbar></Navbar>
      <PageBanner details={details}></PageBanner>
      <SectionTitle heading="Know about your Destination"></SectionTitle>
      <div className="grid gap-x-20 gap-y-16 grid-cols-1 lg:grid-cols-3 px-[10%]  ">
        {/* this id for skeleton */}
        {isLoading && <SkeletonCard number={16}></SkeletonCard>}
        {allBlogs.map((place) => (
          <BlogsCard key={place.index} place={place}></BlogsCard>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
