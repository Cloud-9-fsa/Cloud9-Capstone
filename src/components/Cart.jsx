import React, { useEffect } from "react";
import { createOrder } from "../apiCalls/cart/createOrderApi";
import { getOrder } from "../apiCalls/cart/getOrder";
import { useAuth } from "../context/UseAuth";

export const Cart = () => {
  const { user, order, setOrder, token } = useAuth();

  console.log(order);
  return <div></div>;
};
