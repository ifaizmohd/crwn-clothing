import React from "react";
import {
  CartItemContainer,
  ImageContainer,
  ItemDetailsContainer,
  NameField,
} from "./cart-item.styles";

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => (
  <CartItemContainer>
    <ImageContainer src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <NameField>{name}</NameField>
      <span className="price">
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
