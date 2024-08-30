import ProductItem from "./ProductItem";

function DisplayProducts({ onSelectedProductsChange, products, error }) {
  const handleCheckboxChange = (event) => {
    const productId = event.target.value;
    onSelectedProductsChange((prevSelected) =>
      prevSelected.includes(productId)
        ? prevSelected.filter((id) => id !== productId)
        : [...prevSelected, productId]
    );
  };

  return (
    <div className="grid-container">
      {error && <p>{error}</p>}
      {products.map((product) => (
        <div className="grid-item" key={product.id}>
          <ProductItem
            key={product.id}
            product={product}
            onCheckboxChange={handleCheckboxChange}
          />
        </div>
      ))}
    </div>
  );
}

export default DisplayProducts;
