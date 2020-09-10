/* IMPORTS */
import React from "react";
/* STYLES */
import { CustomButton } from "./customButtom.styles";

const Button = ({ children, ...props }) => (
  <CustomButton {...props}>{children}</CustomButton>
);

export default Button;
