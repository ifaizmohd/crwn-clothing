import React from "react";
import MacSpinner from "../mac-spinner/mac-spinner.component";

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? <MacSpinner /> : <WrappedComponent {...otherProps} />;
};

export default WithSpinner;
