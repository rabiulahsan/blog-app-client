import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import SkeletonCard from "../../../Components/SkeletonCard/SkeletonCard";
import UseAllBlogs from "../../../Hooks/UseAllBlogs/UseAllBlogs";
import BlogsCard from "../../../Shared/BlogsCard/BlogsCard";

const BlogSection = () => {
  const [allBlogs, isLoading] = UseAllBlogs();
  // console.log(allBlogs);

  // console.log(trendingPlaces);
  return (
    <div className="my-[5%]">
      {/* sectiontitle recieved the props and apply a design.  */}
      <SectionTitle heading={"Blogs"}></SectionTitle>

      {/* this is for specific place card  */}
      <div className="grid gap-x-20 gap-y-16 grid-cols-1 lg:grid-cols-3 px-[10%]  ">
        {/* this id for skeleton */}
        {isLoading && <SkeletonCard number={16}></SkeletonCard>}
        {allBlogs.slice(0, 6).map((place) => (
          <BlogsCard key={place.index} place={place}></BlogsCard>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
