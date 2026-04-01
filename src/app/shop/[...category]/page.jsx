import ProductsList from "@components/ProductsList";
import { fetchProductsByCategory } from "@mock-data/products";

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const products = fetchProductsByCategory(category);

  return (
    <main style={{ padding: "24px" }}>
      <h1>Category Page</h1>

      <p>
        <strong>Current path:</strong> /shop/{category.join("/")}
      </p>

      <p>
        <strong>Category segments:</strong> {JSON.stringify(category)}
      </p>

      <ProductsList products={products} />
    </main>
  );
}
