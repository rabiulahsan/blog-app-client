/* eslint-disable react/prop-types */
const PageBanner = ({ details }) => {
  console.log(details);
  return (
    <div className="w-full h-[360px] relative">
      <img className="w-full h-full object-cover" src={details?.image} alt="" />
      <div className="flex justify-center items-center absolute top-0 left-0 right-0 h-full w-full  bg-[rgba(0,0,0,0.6)]">
        <p className="text-4xl text-orange-600 font-bold">{details?.name}</p>
      </div>
    </div>
  );
};

export default PageBanner;
