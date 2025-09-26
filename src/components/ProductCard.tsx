import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";
import {Product} from "@/lib/types";

export default function ProductCard({p}:{p:Product}){
  const price = new Intl.NumberFormat("tr-TR",{style:"currency",currency:"TRY"}).format(p.priceTRY);
  return (
    <div className="rounded-2xl border p-4 grid gap-3">
      <Image src={p.images[0]} alt={p.title} width={600} height={400} className="rounded-xl object-cover" />
      <h3 className="text-lg font-semibold">{p.title}</h3>
      <p className="text-sm opacity-80">{p.shortDescription}</p>
      <div className="text-sm">{price}</div>
      <div className="flex gap-2">
        <Link href={`/tr/products/${p.slug}`} className="underline">Detay</Link>
        <WhatsAppButton label="WhatsApp" text={`Merhaba, ${p.title} için sipariş vermek istiyorum`} />
      </div>
    </div>
  );
}
