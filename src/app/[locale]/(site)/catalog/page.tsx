import dataTR from '@/data/products.tr.json';
import ProductCard from '@/components/ProductCard';

export const dynamic = 'force-static';

export default function Catalog(){
  const products = dataTR as any[];
  return (
    <main className="container mx-auto p-6 grid gap-6">
      <h1 className="text-2xl font-bold">Katalog</h1>
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
        {products.map(p => <ProductCard key={p.slug} p={p} />)}
      </div>
    </main>
  );
}
