import productsTR from "@/data/products.tr.json";
import ProductCard from "@/components/ProductCard";
import CTAIndividual from "@/components/CTAIndividual";
import type { Product } from "@/lib/types";

const products: Product[] = productsTR;
const POPULAR_LIMIT = 8;

export default function Home(){
  const popular = [...products]
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, POPULAR_LIMIT);

  return (
    <main className="container mx-auto grid gap-8 p-6">
      <h1 className="text-2xl font-bold">Popüler Kalıplar</h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
        {popular.map(product => (
          <ProductCard key={product.slug} p={product} />
        ))}
      </div>
      <CTAIndividual />
    </main>
  );
}