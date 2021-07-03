import React from "react";
import { shallow } from "enzyme";
import FormInput from "./form-input.component";

describe("Testing form-input component", () => {
  it("Shallow snapshot testing of form-input component", () => {
    expect(shallow(<FormInput />)).toMatchSnapshot();
  });
});
