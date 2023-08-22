import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index }) => {
  //copy to clipboard alert
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");

  //functions
  const hex = rgbToHex(...rgb);
  //   const rgb = [255, 100, 0];
  // const hex = rgbToHex(...rgb);
  // console.log(hex); // Output: "#ff6400"

  //useEffect
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      className={`color ${index > 10 ? "color-light" : ""}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
