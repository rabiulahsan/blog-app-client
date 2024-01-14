import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import UseCategories from "../../../Hooks/UseCategories/UseCategories";

const CategorySection = () => {
  const categorySectionCard = UseCategories();
  return (
    <div className="my-[5%]">
      {/* sectiontitle recieved the props and apply a design.  */}
      <SectionTitle heading={"Categories"}></SectionTitle>

      {/* this is for specific category card  */}
      {categorySectionCard}
    </div>
  );
};

export default CategorySection;
