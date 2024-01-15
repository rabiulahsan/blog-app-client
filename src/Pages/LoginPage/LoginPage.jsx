import { Player } from "@lottiefiles/react-lottie-player";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
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
        <div className=" border border-blue-500 my-8  flex text-center text-white cursor-pointer font-semibold">
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
