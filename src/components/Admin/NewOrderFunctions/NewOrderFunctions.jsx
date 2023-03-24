import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as ordersAPI from "../../../utilities/apiRoutes/orders-api";
import Onegame from "../../Onegame/Onegame";
import Cart from "../../Cart/Cart";

export default function NewOrderFunctions({ user, setUser }) {
  const [cart, setCart] = useState(null);
  const navigate = useNavigate;

  async function handleAddToOrder(itemId) {
    console.log("Add to order clicked for item ID: ", itemId);
    const updatedCart = await ordersAPI.addGameToCart(itemId);
    setCart(updatedCart);
  }
  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckOut() {
    await ordersAPI.checkout;
    navigate("/orders");
  }



  return (
    <div>
      <Cart handleChangeQty={handleChangeQty} handleCheckOut={handleCheckOut}/>
      <Onegame handleAddToOrder={handleAddToOrder} />

    </div>
  );
}
