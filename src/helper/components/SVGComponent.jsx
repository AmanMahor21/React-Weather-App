import React from "react";
import SVG from "react-inlinesvg";

const SVGComponent = ({ title, src, width, height = "auto" }) => {
  return (
    <span>
      <SVG src={src} width={width} height={height} title="React" />
    </span>
  );
};

export default SVGComponent;
