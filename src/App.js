import { useState } from "react";
import { useQuery } from "react-query";
//Components
import Item from "./components/Item";
import CartList from "./components/CartList";
import Navbar from "./components/Navbar";
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import "./css/custom.css";
const getProducts = async () =>
  await (await fetch("https://fakestoreapi.com/products/")).json();
const App = () => {
  const { isLoading, error, data } = useQuery("products", getProducts);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const getTotalItems = (cartItems) =>
    cartItems.reduce((acum, i) => acum + i.amount, 0);
  const handleAddItemToCart = (item) => {
    setCartItems((prev) => {
      // Search the item in the array
      const isItemInTheCart = prev.find((i) => i.id === item.id);
      if (isItemInTheCart) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, amount: i.amount + 1 } : i
        );
      }
      return [...prev, { ...item, amount: 1 }];
    });
  };
  const handleRemoveItemFromCart = (id) => {
    setCartItems((prev) => {
      const foundItem = prev.find((i) => i.id === id);
      if (foundItem) {
        if (foundItem.amount === 1) {
          const newArray = prev.filter((i) => i.id !== id);
          return newArray;
        } else {
          return prev.map((i) =>
            i.id === id ? { ...i, amount: i.amount - 1 } : i
          );
        }
      } else {
        return prev;
      }
    });
  };
  if (isLoading) return ;
  if (error) return error.message;
  return (
    <>
      <Navbar
        getTotalItems={getTotalItems(cartItems)}
        setCartOpen={setCartOpen}
      ></Navbar>
      <div className="main">
        <Drawer
          anchor="right"
          open={cartOpen}
          onClose={() => setCartOpen(false)}
        >
          <CartList
            cartItems={cartItems}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
          />
        </Drawer>
        <Grid container spacing={3}>
          {data?.map((item) => (
            <Grid key={item.id} item xs={12} sm={4}>
              <Item item={item} handleAddItemToCart={handleAddItemToCart} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};
export default App;