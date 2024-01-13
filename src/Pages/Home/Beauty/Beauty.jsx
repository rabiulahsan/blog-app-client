import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import UseAllBlogs from "../../../Hooks/UseAllBlogs/UseAllBlogs";

const Beauty = () => {
  const allBlogs = UseAllBlogs();

  console.log(allBlogs);

  return (
    <div className="my-[3%]">
      {/* sectiontitle recieved the props and apply a design.  */}
      <SectionTitle heading={"Find the Natures Beauty"}></SectionTitle>
    </div>
  );
};

export default Beauty;
