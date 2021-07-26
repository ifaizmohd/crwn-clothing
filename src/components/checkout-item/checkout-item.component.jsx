import React from "react";
import { connect } from "react-redux";
import {
  addItems,
  clearItemFromCart,
  removeItem,
} from "../../redux/cart/cart.actions";
import {
  ArrowContainer,
  CheckoutItemContainer,
  ImageContainer,
  NameField,
  PriceField,
  QuantityField,
  RemoveButtonContainer,
  ValueField,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => (
  <CheckoutItemContainer>
    <ImageContainer>
      <img src={cartItem.imageUrl} alt="item" />
    </ImageContainer>
    <NameField>{cartItem.name}</NameField>

    <QuantityField>
      <ArrowContainer onClick={() => removeItem(cartItem)}>
        &#10094;
      </ArrowContainer>
      <ValueField>{cartItem.quantity}</ValueField>
      <ArrowContainer onClick={() => addItem(cartItem)}>
        &#10095;
      </ArrowContainer>
    </QuantityField>
    <PriceField>{cartItem.price}</PriceField>
    <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
      &#10005;
    </RemoveButtonContainer>
  </CheckoutItemContainer>
);

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItems(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
