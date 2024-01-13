import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import UseAllBlogs from "../../Hooks/UseAllBlogs/UseAllBlogs";

const Trending = () => {
  const allBlogs = UseAllBlogs();
  console.log(allBlogs);
  const trendingPlaces = allBlogs[0]?.filter((blog) => blog.trending);
  console.log(trendingPlaces);
  return (
    <div className="my-[5%]">
      {/* sectiontitle recieved the props and apply a design.  */}
      <SectionTitle heading={"Trending Places"}></SectionTitle>
    </div>
  );
};

export default Trending;
