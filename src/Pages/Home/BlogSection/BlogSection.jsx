import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import UseAllBlogs from "../../../Hooks/UseAllBlogs/UseAllBlogs";
import Card from "../../../Shared/Card/Card";

const BlogSection = () => {
  const [allBlogs] = UseAllBlogs();
  console.log(allBlogs);

  // console.log(trendingPlaces);
  return (
    <div className="my-[5%]">
      {/* sectiontitle recieved the props and apply a design.  */}
      <SectionTitle heading={"Blogs"}></SectionTitle>

      {/* this is for specific place card  */}
      <div className="grid gap-x-20 gap-y-16 grid-cols-1 lg:grid-cols-3 px-[10%]  ">
        {allBlogs.slice(0, 6).map((place) => (
          <Card key={place?.index} place={place}></Card>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
