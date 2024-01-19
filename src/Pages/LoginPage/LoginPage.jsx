import { Player } from "@lottiefiles/react-lottie-player";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth/UseAuth";

const LoginPage = () => {
  const { user, googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (user) {
    navigate("/");
  }

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    if (user) {
      alert("At first logout");
      return;
    } else {
      googleLogin()
        .then((result) => {
          const loggedInUser = result.user;
          console.log(loggedInUser);
          const saveUser = {
            name: loggedInUser.displayName,
            email: loggedInUser.email,
          };
          fetch("https://blog-server-zeta-lac.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then(() => {
              navigate(from, { replace: true });
            });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-sky-100">
      <div className="bg-white border border-gray-400 p-5">
        <div className="">
          <Player
            className="h-[200px]"
            autoplay
            loop
            src="/signup.json"
          ></Player>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className=" border border-blue-500 my-8  flex text-center text-white cursor-pointer font-semibold"
        >
          <span className="text-2xl p-2">
            <FcGoogle></FcGoogle>
          </span>
          <span className="bg-blue-500 w-full p-2 hover:bg-blue-600">
            Sign in With Google
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
