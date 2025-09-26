import productsTR from "@/data/products.tr.json";
import type { Product } from "@/lib/types";
import ProductCard from "@/components/ProductCard";

export const dynamic = "force-static";

const products: Product[] = productsTR as unknown as Product[];

export default function Catalog(){
  return (
    <main className="grid gap-6">
      <h2 className="text-xl font-semibold">Katalog</h2>
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
        {products.map(p => <ProductCard key={p.slug} p={p} />)}
      </div>
    </main>
  );
}