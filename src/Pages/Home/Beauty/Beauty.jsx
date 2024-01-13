import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import UseCountries from "../../../Hooks/UseCountries/UseCountries";

const Beauty = () => {
  const countrySection = UseCountries();

  return (
    <div className="my-[5%]">
      {/* sectiontitle recieved the props and apply a design.  */}
      <SectionTitle heading={"Find the Natures Beauty"}></SectionTitle>

      {/* this is for specific country card  */}
      {countrySection}
    </div>
  );
};

export default Beauty;
