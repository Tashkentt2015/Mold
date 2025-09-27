import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35)_0%,_rgba(15,23,42,0)_60%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-8 sm:px-12 sm:pb-32">
          <nav className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 text-lg font-semibold text-sky-300">M</span>
              <span className="text-lg font-semibold tracking-wide text-white/90">Mold 3000</span>
            </div>
            <div className="hidden items-center gap-8 text-sm font-medium text-white/70 lg:flex">
              <Link className="transition hover:text-white" href="/catalog">Каталог</Link>
              <Link className="transition hover:text-white" href="/delivery">Доставка</Link>
              <Link className="transition hover:text-white" href="/#cases">Кейсы</Link>
              <Link className="transition hover:text-white" href="/contacts">Контакты</Link>
            </div>
            <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-neutral-900 shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-100">
              Оставить заявку
            </button>
          </nav>

          {/* остальной контент без изменений */}
        </div>
      </header>
    </div>
  );
}
