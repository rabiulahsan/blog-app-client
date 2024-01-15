import { Player } from "@lottiefiles/react-lottie-player";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const About = () => {
  return (
    <div className="my-[5%] px-[10%]">
      <SectionTitle heading="About Us"></SectionTitle>
      <div className=" flex jus items-center">
        <div className="">
          <Player
            className="h-[350px]"
            autoplay
            loop
            src="/about.json"
          ></Player>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default About;
