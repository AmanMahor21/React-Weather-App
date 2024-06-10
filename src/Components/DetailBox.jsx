import React from "react";
import SVGComponent from "../helper/components/SVGComponent";

const DetailBox = ({ title, src, width, height = "auto", value, measure }) => {
  return (
    <div className="lower-sec">
      <div className="row">
        <p>{title}</p>
        <SVGComponent src={src} width={width} height={height} />
      </div>
      <p id="fact">
        {value} {measure}
      </p>
    </div>
  );
};

export default DetailBox;
