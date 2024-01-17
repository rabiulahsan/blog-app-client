import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import UseCountries from "../../../Hooks/UseCountries/UseCountries";
import CardForPage from "../../../Shared/CardForPage/CardForPage";
import StaggerAnimation from "../../../Shared/StaggerAnimation/StaggerAnimation";

const Beauty = () => {
  const [countries] = UseCountries();

  return (
    <div className="my-[5%]">
      {/* sectiontitle recieved the props and apply a design.  */}
      <SectionTitle heading={"Find the Natures Beauty"}></SectionTitle>

      {/* this is for  animation  */}
      <StaggerAnimation delayChildren={0.2} staggerChildren={0.2}>
        {/* this is for specific country card  */}
        <div className="grid gap-x-16 gap-y-16 grid-cols-1 lg:grid-cols-4 px-[10%]  ">
          {countries.map((country) => (
            <CardForPage key={country?.id} details={country}></CardForPage>
          ))}
        </div>
      </StaggerAnimation>
    </div>
  );
};

export default Beauty;
