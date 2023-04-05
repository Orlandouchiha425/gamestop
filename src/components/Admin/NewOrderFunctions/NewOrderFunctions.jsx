import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as ordersAPI from "../../../utilities/apiRoutes/orders-api";
import Onegame from "../../Onegame/Onegame";
import Cart from "../../Cart/Cart";
import { getAllGames } from "../../../utilities/apiRoutes/games-api";

export default function NewOrderFunctions({ user, setUser }) {
  const [gameItems, setGameItems] = useState([]);
  const [cart, setCart] = useState(null);
  const gamesRef = useRef([]);
  const navigate = useNavigate;

  useEffect(function () {
    async function getGames() {
      const gameItems = await getAllGames();
      gamesRef.current = gameItems.reduce((gameFound, item) => {
        const found = item.games.title;
        return gameFound.includes(found) ? gameFound : [...gameFound, found];
      }, []);
      setGameItems(gameItems);
    }
    getGames();
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  async function handleAddToOrder(itemId) {
    try {
      const updatedCart = await ordersAPI.addGameToCart(itemId);
      setCart(updatedCart);
      console.log("Add to order clicked for item ID: ", itemId);
      
    } catch (error) {
      console.log(error)
    }
   
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
      <Cart handleChangeQty={handleChangeQty} handleCheckOut={handleCheckOut} />
      <Onegame handleAddToOrder={handleAddToOrder} />
    </div>
  );
}
