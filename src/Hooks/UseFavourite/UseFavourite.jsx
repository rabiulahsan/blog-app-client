import useAuth from "../UseAuth/UseAuth";
import UseAxiosSecure from "../UseAxiosSecure/UseAxiosSecure";

const UseFavourite = () => {
  const { user } = useAuth();
  const [axiosSecure] = UseAxiosSecure();

  const favouriteData = axiosSecure.get(`/favourites?email=${user?.email}`);
  console.log(favouriteData);

  return [favouriteData];
};

export default UseFavourite;
