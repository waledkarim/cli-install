const allProducts = [
  {
    id: 1,
    name: "Basic Laptop",
    categoryPath: ["electronics", "laptops"],
    price: 700,
  },
  {
    id: 2,
    name: "Gaming Beast Pro",
    categoryPath: ["electronics", "laptops", "gaming"],
    price: 1800,
  },
  {
    id: 3,
    name: "Wireless Mouse",
    categoryPath: ["electronics", "accessories"],
    price: 40,
  },
  {
    id: 4,
    name: "Office Chair",
    categoryPath: ["home", "furniture"],
    price: 250,
  },
  {
    id: 5,
    name: "Gaming Keyboard",
    categoryPath: ["electronics", "laptops", "gaming"],
    price: 120,
  },
];

export function fetchProductsByCategory(categories) {
  return allProducts.filter((product) => {
    return categories.every((segment, index) => {
      return product.categoryPath[index] === segment;
    });
  });
}
