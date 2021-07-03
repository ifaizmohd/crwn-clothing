import React from "react";
import { shallow } from "enzyme";
import Directory from "./directory.component";

describe("Testing of directory component", () => {
  it("Shallow snapshot testing of directory component", () => {
    expect(shallow(<Directory />)).toMatchSnapshot();
  });
});
