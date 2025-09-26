import products from '@/data/products.tr.json';
import ProductCard from '@/components/ProductCard';
import CTAIndividual from '@/components/CTAIndividual';

export default function Home(){
  const popular = [...(products as any[])].sort((a,b)=>b.popularity-a.popularity).slice(0,8);
  return (
    <main className="container mx-auto p-6 grid gap-8">
      <h1 className="text-2xl font-bold">Popüler Kalıplar</h1>
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
        {popular.map(p => <ProductCard key={p.slug} p={p} />)}
      </div>
      <CTAIndividual/>
    </main>
  );
}
