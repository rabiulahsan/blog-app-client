import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import SkeletonCard from "../../Components/SkeletonCard/SkeletonCard";
import UseAllBlogs from "../../Hooks/UseAllBlogs/UseAllBlogs";
import Card from "../Card/Card";

const Trending = () => {
  //get all the blogs data
  const [allBlogs, isLoading] = UseAllBlogs();
  // console.log(allBlogs);

  //filter the only trending blog
  const trendingPlaces = allBlogs?.filter((blog) => blog?.trending);
  // console.log(trendingPlaces);

  return (
    <div className="my-[5%] ">
      {/* sectiontitle recieved the props and apply a design.  */}
      <SectionTitle heading={"Trending Places"}></SectionTitle>

      {/* this is for specific place card  */}
      <div className="grid gap-x-12 gap-y-20 grid-cols-1 lg:grid-cols-4 px-[10%]  ">
        {/* this id for skeleton */}
        {isLoading && <SkeletonCard number={16}></SkeletonCard>}
        {trendingPlaces.map((place) => (
          <Card key={place?._id} place={place}></Card>
        ))}
      </div>
    </div>
  );
};

export default Trending;
