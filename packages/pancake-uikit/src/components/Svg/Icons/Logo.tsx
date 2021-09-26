import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = () => {
  return (
    <Svg viewBox="0 0 32 32" {...props} />
  );
};

export default Icon;
