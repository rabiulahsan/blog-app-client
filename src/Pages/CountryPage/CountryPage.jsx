import PageTitle from "../../Components/PageTitle/PageTitle";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
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
      {/* this is for scroll to top after coming this page  */}
      <ScrollToTop></ScrollToTop>
      {/* this is for title of the  page  */}
      <PageTitle pageDescription="Countries"></PageTitle>
      <Navbar></Navbar>
      <PageBanner details={details}></PageBanner>
      <SectionTitle heading="Countries You would love to visit"></SectionTitle>
      <div className="mb-[5%]">{countrySection}</div>
    </div>
  );
};

export default CountryPage;
