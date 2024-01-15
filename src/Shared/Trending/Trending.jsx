import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import UseAllBlogs from "../../Hooks/UseAllBlogs/UseAllBlogs";
import Card from "../Card/Card";

const Trending = () => {
  //get all the blogs data
  const allBlogs = UseAllBlogs();
  // console.log(allBlogs);

  //filter the only trending blog
  const trendingPlaces = allBlogs[0]?.filter((blog) => blog.trending);
  // console.log(trendingPlaces);

  return (
    <div className="mt-[5%] mb-[8%]">
      {/* sectiontitle recieved the props and apply a design.  */}
      <SectionTitle heading={"Trending Places"}></SectionTitle>

      {/* this is for specific place card  */}
      <div className="grid gap-x-12 gap-y-20 grid-cols-1 lg:grid-cols-4 px-[10%]  ">
        {trendingPlaces.map((place) => (
          <Card key={place?._id} place={place}></Card>
        ))}
      </div>
    </div>
  );
};

export default Trending;
