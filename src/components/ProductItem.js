const ProductItem = ({ data, addToCart }) => {
    let { id, name, price, img } = data;
    return (
        
        <div class="container justify-content-center align-self-center">
            <div class="row justify-content-center align-self-center">

                <div class="row cards">
                    <article class="col-md-3"></article>
                    <article class="col-md-6">
                        <div class="card text-center text-white bg-dark" id="musicCard">
                            <img src={img} class="card-img-top img-thumbnail img-fluid mx-auto" alt="Portada de tarjeta"></img>
                            <div class="card-body">
                                <h3 class="card-title">{name}</h3>
                                <p class="card-text">s/.{price}</p>
                                <button onClick={() => addToCart(id)}>Agregar al carrito</button>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
  };
  
  export default ProductItem;