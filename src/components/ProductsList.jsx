export default function ProductsList({ products }) {
  if (!products.length) {
    return <p>No products found for this category.</p>;
  }

  return (
    <div>
      <h2>Products</h2>
      <ul style={{ paddingLeft: "20px" }}>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "12px" }}>
            <div>
              <strong>{product.name}</strong>
            </div>
            <div>Category: {product.categoryPath.join(" / ")}</div>
            <div>Price: ${product.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
