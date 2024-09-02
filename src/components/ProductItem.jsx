function ProductItem({ product, onCheckboxChange }) {
  return (
    <>
      <input
        type="checkbox"
        value={product.id}
        onChange={onCheckboxChange}
        className="delete-checkbox"
      />
      <p>SKU: {product.sku}</p>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      {product.product_type === "dvd" && <p>Size: {product.size} MB</p>}
      {product.product_type === "book" && <p>Weight: {product.weight}KG</p>}
      {product.product_type === "furniture" && (
        <p>
          Dimension: {product.height}x{product.width}x{product.length}
        </p>
      )}
    </>
  );
}

export default ProductItem;
