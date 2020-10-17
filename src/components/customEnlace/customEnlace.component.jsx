import React from "react";
import { EnlaceCustom } from "./customEnlace.styles";

const Enlace = ({ children, ...props }) => (
  <EnlaceCustom {...props}>{children}</EnlaceCustom>
);

export default Enlace;
