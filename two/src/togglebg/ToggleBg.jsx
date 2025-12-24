import { useState } from "react";
import "./style.css";

const ToggleBg = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("black");
  const [buttonColor, setButtonColor] = useState("white");

  const handleClick = () => {
    if (textColor === "black") {
      setBackgroundColor("black");
      setTextColor("white");
      setButtonColor("black");
    } else {
      setBackgroundColor("white");
      setTextColor("black");
      setButtonColor("white");
    }
  };

  return (
    <div
      style={{
        backgroundColor,
        color: textColor,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <button
        style={{
          backgroundColor: buttonColor,
          color: textColor,
          border: `2px solid ${textColor}`,
        }}
        onClick={handleClick}
      >
        Toggle
      </button>
    </div>
  );
};

export default ToggleBg;
