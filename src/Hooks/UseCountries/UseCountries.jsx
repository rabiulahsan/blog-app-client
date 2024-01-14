import CategoryCard from "../../Pages/Home/CategorySection/CategoryCard";

const UseCountries = () => {
  const countries = [
    {
      id: 1,
      name: "Bangladesh",
      image:
        "https://media.assettype.com/bdnews24-english%2Fimport%2Fmedia%2F2021%2F10%2F15%2Fvanga-circle-expressway-131021-17.jpg",
    },
    {
      id: 2,
      name: "USA",
      image:
        "https://www.travelandleisure.com/thmb/91pb8LbDAUwUN_11wATYjx5oF8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg",
    },
    {
      id: 3,
      name: "Canada",
      image:
        "https://media.istockphoto.com/id/939926334/photo/modern-futuristic-night-toronto-city-skyline.jpg?s=612x612&w=0&k=20&c=Lsl0CBpLHLU35ou3F7CdRW8qR4jFlFq0vlBt6WcrOzU=",
    },
    {
      id: 4,
      name: "India",
      image:
        "https://www.gingerhotels.com/resourcefiles/blogsmallimages/mumbai-skyline.jpg",
    },
    {
      id: 5,
      name: "New Zealand",
      image:
        "https://images.unsplash.com/flagged/photo-1557213555-babaf5435c0b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmV3JTIwemVhbGFuZCUyMGNpdHl8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 6,
      name: "Switzerland",
      image:
        "https://media.cntraveller.com/photos/611bf35380db5ca184e714b0/4:3/w_1704,h_1278,c_limit/lucerne.jpg",
    },
    {
      id: 7,
      name: "Australia",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/19/Melburnian_Skyline.jpg",
    },
    {
      id: 8,
      name: "Iceland",
      image:
        "https://media.cntraveler.com/photos/542d98cc425f183f61bf7912/master/pass/reykjavik-iceland-2048-1536.jpg",
    },
  ];
  return (
    <div className="grid gap-12 grid-cols-1 lg:grid-cols-4 px-[10%]  ">
      {countries.map((country) => (
        <CategoryCard key={country?.id} details={country}></CategoryCard>
      ))}
    </div>
  );
};

export default UseCountries;
