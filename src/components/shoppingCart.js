import { useReducer } from "react";
import { TYPES } from "../actions/shoppingAction";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

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
    Swal.fire({
        
        icon: 'success',
        title: 'Tu carrito ahora está vacío',
        showConfirmButton: false,
        timer: 2000
      })
  };
  const comprarPlan = () => {
    Swal.fire({
        
        icon: 'success',
        title: 'Compra realizada',
        showConfirmButton: false,
        timer: 2000
      })
  };

  return (
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <div class="tituloSection pt-5">
            <h3 class="p-5">Carrito de Compras</h3>
        </div>
        <p class="mx-5 text-secondary">Escoja el plan que desee</p>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
       
        <div class="tituloSection pt-5">
                <h3 class="p-5">Carrito</h3>
                
        </div>
        <p class="mx-5 text-secondary">Limpie el carrito o realice su compra</p>
            <article className="box" style={{ backgroundColor: '	rgb (211,211,211)'}}>
                <div class="container justify-content-center align-self-center m-3">
                    <button class="btn btn-primary m-3" onClick={clearCart}>Limpiar Carrito</button>
                    <button class="btn btn-primary m-3" onClick={comprarPlan}>Realizar compra</button>
                    {cart.map((item, index) => (
                    <CartItem key={index} data={item} delFromCart={delFromCart} />
                    ))}
                    
                </div>
            </article>
            
        <script src="sweetalert2.all.min.js"></script>
    </div>
    
  );
};

export default ShoppingCart;