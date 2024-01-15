import useAuth from "../../Hooks/UseAuth/UseAuth";
import Navbar from "../Home/Navbar/Navbar";

const FavoritesPage = () => {
  const { user } = useAuth();
  return (
    <div>
      <Navbar></Navbar>
      This is {user.displayName}&apos;s favorite tour list
    </div>
  );
};

export default FavoritesPage;
