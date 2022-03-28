const ProductItem = ({ data, addToCart }) => {
    let { id, name, price, img } = data;
    return (
        <article class="col-md-5">
            <div class="card text-center text-white bg-dark" id="musicCard">
                <img src={img} class="card-img-top img-thumbnail img-fluid mx-auto" alt="Portada de tarjeta"></img>
                <div class="card-body">
                    <h3 class="card-title">{name}</h3>
                    <p class="card-text">s/.{price}</p>
                    <button onClick={() => addToCart(id)}>Agregar al carrito</button>
                </div>
            </div>
          
        </article>
    );
  };
  
  export default ProductItem;