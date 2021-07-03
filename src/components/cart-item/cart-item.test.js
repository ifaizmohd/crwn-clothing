import { shallow } from "enzyme";
import React from "react";
import CartItem from "./cart-item.component";

describe("Cart component testing", () => {
  const item = {
    name: "test",
    imageUrl: "test",
    price: 0,
    quantity: 1,
  };
  it("Shallow snapshot testing of cart-item component", () => {
    expect(shallow(<CartItem item={item} />)).toMatchSnapshot();
  });
});
