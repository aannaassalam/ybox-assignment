import React from "react";
import "./loader.css";
import Lottie from "react-lottie";
import loading from "./890-loading-animation.json";

function Loader() {
  return (
    <div className="loader">
      <Lottie
        options={{ animationData: loading, loop: true, autoplay: true }}
        width={350}
        height={350}
      />
    </div>
  );
}

export default Loader;
