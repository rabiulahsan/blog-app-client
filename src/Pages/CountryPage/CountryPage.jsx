import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import UseCountries from "../../Hooks/UseCountries/UseCountries";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import Navbar from "../Home/Navbar/Navbar";

const CountryPage = () => {
  const countrySection = UseCountries();

  const details = {
    image:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW4lMjBsYWtlfGVufDB8fDB8fHww",
    name: "Countries",
  };
  return (
    <div>
      <Navbar></Navbar>
      <PageBanner details={details}></PageBanner>
      <SectionTitle heading="Countries You would love to visit"></SectionTitle>
      {countrySection}
    </div>
  );
};

export default CountryPage;
