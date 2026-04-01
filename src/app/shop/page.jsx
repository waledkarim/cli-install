import Link from "next/link";

export default function ShopPage() {
  return (
    <main style={{ padding: "24px" }}>
      <h1>Shop</h1>
      <p>Select a category to browse products.</p>

      <ul className="flex flex-col gap-y-2">
        <Link href={"/shop/electronics"}>/shop/electronics</Link>
        <Link href={"/shop/electronics/laptops"}>
          /shop/electronics/laptops
        </Link>
        <Link href={"/shop/electronics/laptops/gaming"}>
          /shop/electronics/laptops/gaming
        </Link>
        <Link href={"/shop/home/furniture"}>/shop/home/furniture</Link>
      </ul>
    </main>
  );
}
