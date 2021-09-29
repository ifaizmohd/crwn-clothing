import React from "react";
import { SpinnerOverlay } from "../spinner/spinner.styles";
import { SpinnerContainer } from "./mac-spinner.styles";

const MacSpinner = () => (
  <SpinnerOverlay>
    <SpinnerContainer></SpinnerContainer>
  </SpinnerOverlay>
);

export default MacSpinner;
