import { useReducer } from "react";
import { TYPES } from "../actions/shoppingAction";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;

  const addToCart = (id) => {
    //console.log(id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const delFromCart = (id, all = false) => {
    //console.log(id, all);
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <div>
        <div class="tituloSection pt-5">
            <h3>Carrito de Compras</h3>
        </div>
        
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
      <div class="tituloSection pt-5">
            <h3>Carrito</h3>
      </div>
      
      <article className="box">
        <button class="btn btn-primary" onClick={clearCart}>Limpiar Carrito</button>
        {cart.map((item, index) => (
          <CartItem key={index} data={item} delFromCart={delFromCart} />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;