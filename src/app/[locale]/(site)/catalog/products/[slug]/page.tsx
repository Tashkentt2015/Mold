import dataTR from '@/data/products.tr.json';
import Image from 'next/image';
import WhatsAppButton from '@/components/WhatsAppButton';
import type { Product } from '@/lib/types';

const products: Product[] = dataTR as Product[];

export async function generateStaticParams(){
  return products.map(p=>({slug:p.slug}));
}

export default function ProductPage({params}:{params:{slug:string}}){
  const p = products.find(x=>x.slug===params.slug);
  if(!p) return null;
  const price = new Intl.NumberFormat('tr-TR',{style:'currency',currency:'TRY'}).format(p.priceTRY);
  return (
    <main className="container mx-auto p-6 grid gap-4">
      <div className="grid md:grid-cols-2 gap-6">
        <Image src={p.images[0]} alt={p.title} width={800} height={600} className="rounded-2xl object-cover" />
        <div className="grid gap-3">
          <h1 className="text-2xl font-bold">{p.title}</h1>
          <p className="opacity-80">{p.shortDescription}</p>
          <div><b>Fiyat:</b> {price}</div>
          <div><b>Silikon:</b> {p.silicone}</div>
          <div><b>Kullanım:</b> {p.useCases.join(', ')}</div>
          <div><b>Boyut:</b> {p.sizes.map(s=>`${s.width}×${s.height}${s.unit}`).join(', ')}</div>
          <WhatsAppButton label="WhatsApp ile satın al" text={`Merhaba, ${p.title} için sipariş vermek istiyorum`} />
        </div>
      </div>
    </main>
  );
}