import React from "react";
import { shallow } from "enzyme";
import CustomButton from "./custom-button.component";

describe("Testing of custom button component", () => {
  it("Shallow snapshot testing of custom-button component", () => {
    expect(shallow(<CustomButton />)).toMatchSnapshot();
  });
});
