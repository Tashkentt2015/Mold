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

          <div className="grid gap-16 lg:grid-cols-[minmax(0,_1fr)_420px] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/60">
                Digital-дизайн
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Создаём выразительные продукты, которые выделяются и работают
              </h1>
              <p className="max-w-xl text-base text-white/70 sm:text-lg">
                Мы объединяем стратегию, дизайн и разработку, чтобы запускать цифровые сервисы, которыми приятно пользоваться. Ваша идея заслуживает премиального воплощения — и мы готовы его обеспечить.
              </p>
              <div className="flex flex-col gap-4 text-sm text-white/60 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-base font-semibold text-white">12+</span>
                  <span className="max-w-[180px] leading-snug">лет опыта в креативных индустриях</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-base font-semibold text-white">40+</span>
                  <span className="max-w-[200px] leading-snug">реализованных проектов для международных брендов</span>
                </div>
              </div>
            </div>

            <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8 shadow-2xl shadow-sky-500/20">
              <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-sky-400/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -right-10 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl" />
              <div className="relative space-y-6">
                <p className="text-sm uppercase tracking-[0.3em] text-white/40">Наш подход</p>
                <p className="text-lg font-medium text-white/80">
                  Каждая деталь продумана: от первого экрана до последних пикселей интерфейса. Мы выстраиваем процессы, которые дают измеримый результат и позволяют масштабироваться.
                </p>
                <ul className="space-y-4 text-sm text-white/60">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-400" />
                    Кастомные дизайн-системы и UI-киты
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-400" />
                    Глубокая аналитика и исследование аудитории
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-400" />
                    Команда для сопровождения после релиза
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
