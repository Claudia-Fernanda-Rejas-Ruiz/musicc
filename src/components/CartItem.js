
const CartItem = ({ data, delFromCart }) => {
    let { id, name, price, img, quantity } = data;
  
    return (
      
            <article class="col-md-5 p-5 row justify-content-center align-self-center">
                <div class="card text-center text-white bg-dark justify-content-center align-self-center" id="musicCard">
                    <img src={img} class="card-img-top img-thumbnail img-fluid mx-auto" alt="Portada de tarjeta"></img>
                    <div class="card-body">
                      <h3 class="card-title">{name}</h3>
                      <p class="card-text">s/.{price} x {quantity} = s/.{price * quantity}</p>
                    </div>
                    <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                        <button class="btn btn-outline-primary" onClick={() => delFromCart(id)}>Eliminar Uno</button>
                        
                        <button class="btn btn-outline-primary" onClick={() => delFromCart(id, true)}>Eliminar Todos</button>
                    </div>
                  </div>
            </article>   
        
    );
  };
  
  export default CartItem;