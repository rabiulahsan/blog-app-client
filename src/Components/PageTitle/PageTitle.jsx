import { Helmet } from "react-helmet";

/* eslint-disable react/prop-types */
const PageTitle = ({ pageDescription }) => {
  // console.log(pageDescription);
  return (
    <Helmet>
      <title> Explorer || {pageDescription}</title>
    </Helmet>
  );
};

export default PageTitle;
