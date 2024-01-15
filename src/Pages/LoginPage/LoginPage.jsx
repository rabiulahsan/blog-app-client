import { Player } from "@lottiefiles/react-lottie-player";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-sky-100">
      <div className="">
        <Player className="h-[200px]" autoplay loop src="/signup.json"></Player>
      </div>
      <div className="">this is div</div>
    </div>
  );
};

export default LoginPage;
