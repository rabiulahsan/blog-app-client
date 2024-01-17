import PageTitle from "../../Components/PageTitle/PageTitle";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import UseCountries from "../../Hooks/UseCountries/UseCountries";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import CardForPage from "../../Shared/CardForPage/CardForPage";
import Navbar from "../Home/Navbar/Navbar";

const CountryPage = () => {
  const [countries] = UseCountries();

  const details = {
    image:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW4lMjBsYWtlfGVufDB8fDB8fHww",
    title: "Countries",
  };
  return (
    <div>
      {/* this is for scroll to top after coming this page  */}
      <ScrollToTop></ScrollToTop>
      {/* this is for title of the  page  */}
      <PageTitle pageDescription="Countries"></PageTitle>
      <Navbar></Navbar>
      <PageBanner details={details}></PageBanner>

      {/* this is for animation  */}
      <SectionTitle heading="Countries You would love to visit"></SectionTitle>
      <div className="mb-[5%]">
        <div className="grid gap-x-16 gap-y-16 grid-cols-1 lg:grid-cols-4 px-[10%]  ">
          {countries.map((country) => (
            <CardForPage key={country?.id} details={country}></CardForPage>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
