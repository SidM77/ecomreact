import data from './data';

function App() {
  return (
    <div>
      <header>
        <a className="companyName" href="/">
          SIDINO COUTURE
        </a>
      </header>
      <h1>Featured Products</h1>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <a href={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </a>
            <div className="product-info">
              {/* <a href={`/product/${product.slug}`}> */}
              <p className="brandName">{product.brand}</p>
              <p className="productName">{product.name}</p>
              {/* </a> */}
              <p className="productCost">₹{product.price}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
