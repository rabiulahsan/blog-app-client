/* eslint-disable react/prop-types */
import { useState } from "react";
import "./btn.css";

const HoverOverlayButton = ({ btnName }) => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    // const x = e.pageX - e.currentTarget.offsetLeft;
    // const y = e.pageY - e.currentTarget.offsetTop;

    //it is used for specify the target element
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoordinates({ x, y });

    // console.log(e);
  };
  const buttonStyles = {
    "--before-top": `${coordinates.y}px`,
    "--before-left": `${coordinates.x}px`,
  };
  console.log(buttonStyles);

  return (
    <button
      onMouseMove={(e) => handleMouseMove(e)}
      style={buttonStyles}
      className="  button px-5 py-2  font-semibold text-base rounded text-white inline-flex relative overflow-hidden bg-orange-500 "
    >
      <span className="relative z-30">{btnName}</span>
    </button>
  );
};

export default HoverOverlayButton;
