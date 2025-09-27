import Link from "next/link";
import Image from "next/image";
import productsTR from "@/data/products.tr.json";

type Product = {
  slug: string;
  title: string;
  shortDescription: string;
  priceTRY: number;
  images: string[];
};

const products: Product[] = productsTR as unknown as Product[];

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35)_0%,_rgba(15,23,42,0)_60%)]" />
        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-8 sm:px-12">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 text-lg font-semibold text-sky-300">M</span>
            <span className="text-lg font-semibold tracking-wide text-white/90">MOLD 3000</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 lg:flex">
            <Link className="transition hover:text-white" href="/catalog">Каталог</Link>
            <Link className="transition hover:text-white" href="/#solutions">Решения</Link>
            <Link className="transition hover:text-white" href="/#cases">Кейсы</Link>
            <Link className="transition hover:text-white" href="/#contacts">Контакты</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12 sm:px-12">
        <h1 className="mb-6 text-3xl font-bold">Каталог силиконовых форм</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.slug} className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src={p.images[0] ?? "/images/products/kalip-orn1.jpg"} alt={p.title} fill className="object-cover" />
              </div>
              <h3 className="text-base font-semibold">{p.title}</h3>
              <p className="mt-1 line-clamp-2 text-sm text-white/70">{p.shortDescription}</p>
              <div className="mt-3 flex items-center justify-between">
                               <Link
                  href={{
                    pathname: "/products/[slug]",
                    params: { slug: p.slug },
                  }}
                  className="text-sm underline underline-offset-4"
                >
                  Подробнее
                </Link>
                <a
                  href={`https://wa.me/90XXXXXXXXXX?text=${encodeURIComponent(`Merhaba, ${p.title} için sipariş vermek istiyorum`)}`}
                  target="_blank"
                  rel="noopener"
                  className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-neutral-900"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
