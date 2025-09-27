import Image from "next/image";
import productsTR from "@/data/products.tr.json";

type Product = { slug:string; title:string; shortDescription:string; priceTRY:number; images:string[] };
const products = productsTR as unknown as Product[];

export default function CatalogPage(){
  return (
    <main className="min-h-screen bg-neutral-950 text-white mx-auto max-w-6xl px-6 py-12 sm:px-12">
      <h1 className="mb-6 text-3xl font-bold">Каталог силиконовых форм</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map(p=>(
          <div key={p.slug} className="rounded-3xl border border-white/10 bg-white/5 p-4">
            <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={p.images[0] ?? "/images/products/kalip-orn1.jpg"} alt={p.title} fill className="object-cover" />
            </div>
            <h3 className="text-base font-semibold">{p.title}</h3>
            <p className="mt-1 line-clamp-2 text-sm text-white/70">{p.shortDescription}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
