import React from "react";
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from "./error.styles";

const ErrorComponent = () => (
  <ErrorImageOverlay>
    <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png" />
    <ErrorImageText>This page is broken</ErrorImageText>
  </ErrorImageOverlay>
);

export default ErrorComponent;
