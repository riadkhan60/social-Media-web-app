import Lottie from "lottie-react";
import animation from "../Imgs/Animation - 1703784299351.json";

function Animation() {
  return (
    <div className="w-[500px] h-[432.66] p-12 bg-main rounded-xl">
      <Lottie animationData={animation} loop={false}></Lottie>
    </div>
  );
}

export default Animation;
