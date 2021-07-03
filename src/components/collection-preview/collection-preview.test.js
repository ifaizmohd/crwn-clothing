import React from "react";
import { shallow } from "enzyme";
import CollectionPreview from "./collection-preview.component";

describe("Testing collection preview component", () => {
  it("Shallow snapshot testing collection preview component", () => {
    expect(shallow(<CollectionPreview items={[]} />)).toMatchSnapshot();
  });
});
