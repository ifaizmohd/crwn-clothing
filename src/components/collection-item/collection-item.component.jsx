import React from "react";
import { connect } from "react-redux";
import { addItems } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItems }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="image"
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={() => addItems(item)} inverted>
        Add To Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItems: (item) => dispatch(addItems(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
