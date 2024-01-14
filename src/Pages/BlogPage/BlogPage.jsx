import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import UseAllBlogs from "../../Hooks/UseAllBlogs/UseAllBlogs";
import BlogsCard from "../../Shared/BlogsCard/BlogsCard";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import Navbar from "../Home/Navbar/Navbar";

const BlogPage = () => {
  //getting all blogs data
  const [allBlogs] = UseAllBlogs();

  const details = {
    image: "https://sb.ecobnb.net/app/uploads/sites/3/2022/04/copertina-1.jpg",
    name: "Blogs",
  };
  return (
    <div>
      <Navbar></Navbar>
      <PageBanner details={details}></PageBanner>
      <SectionTitle heading="Know about your Destination"></SectionTitle>
      <div className="grid gap-x-20 gap-y-16 grid-cols-1 lg:grid-cols-3 px-[10%]  ">
        {allBlogs.map((place) => (
          <BlogsCard key={place.index} place={place}></BlogsCard>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
