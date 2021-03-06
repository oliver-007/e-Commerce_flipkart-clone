import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout/Layout";
import Card from "../../components/UI/Card/Card";
import CartItem from "./CartItem/CartItem";
import { addToCart, getCartItems } from "../../redux/actions/cart.action";
import "./cartPage.css";

const CartPage = (props) => {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  // const cartItems = cart.cartItems;

  const [cartItems, setCartItems] = useState(cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

  useEffect(() => {
    if (auth.authenticate) {
      dispatch(getCartItems());
    }
  }, [auth.authenticate]);

  const onQuantityIncrement = (_id, qty) => {
    const { name, img, price } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }, +1));
  };

  const onQuantityDecrement = (_id, qty) => {
    const { name, img, price } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }, -1));
  };

  return (
    <Layout>
      <div className="cartContainer" style={{ alignItems: "flex-start" }}>
        <Card headerLeft={`My Cart`} headerRight={<div> Deliver to</div>}>
          {Object.keys(cartItems).map((key, index) => (
            <CartItem
              key={index}
              cartItem={cartItems[key]}
              onQuantityInc={onQuantityIncrement}
              onQuantityDec={onQuantityDecrement}
            />
          ))}
        </Card>
        <Card
          headerLeft="Price"
          style={{
            width: "500px",
          }}
        ></Card>
      </div>
    </Layout>
  );
};

export default CartPage;
