import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import SkeletonCard from "../../Components/SkeletonCard/SkeletonCard";
import UseAllBlogs from "../../Hooks/UseAllBlogs/UseAllBlogs";
import StaggerAnimation from "../StaggerAnimation/StaggerAnimation";

import TrendingCard from "./TrendingCard";

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

      {/* for skeleton  */}
      <div className="grid gap-x-12 gap-y-20 grid-cols-1 lg:grid-cols-4 px-[10%]  ">
        {isLoading && <SkeletonCard number={10}></SkeletonCard>}
      </div>

      {/* this is for animation */}
      <StaggerAnimation delayChildren={0.2} staggerChildren={0.3}>
        {/* this is for specific place card  */}
        <div className="grid gap-x-12 gap-y-20 grid-cols-1 lg:grid-cols-4 px-[10%]  ">
          {/* this id for skeleton */}

          {trendingPlaces.map((place) => (
            <TrendingCard key={place?._id} place={place}></TrendingCard>
          ))}
        </div>
      </StaggerAnimation>
    </div>
  );
};

export default Trending;
