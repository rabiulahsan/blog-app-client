import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import UseCategories from "../../../Hooks/UseCategories/UseCategories";
import CategoryCard from "./CategoryCard";

const CategorySection = () => {
  //getiing all categories
  const [categories] = UseCategories();
  return (
    <div className="my-[5%]  relative">
      {/* sectiontitle recieved the props and apply a design.  */}
      <SectionTitle heading={"Categories"}></SectionTitle>

      {/* this is for specific category card  */}
      <div className="grid gap-16 grid-cols-1 lg:grid-cols-4 px-[10%]  ">
        {categories.slice(0, 7).map((category) => (
          <CategoryCard key={category?.id} details={category}></CategoryCard>
        ))}
      </div>
      <button className="orange-small-btn absolute right-[10%] bottom-[20px]">
        <Link to="/categories">All Categories</Link>
      </button>
    </div>
  );
};

export default CategorySection;
