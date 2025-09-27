import Link from "next/link";

export default function DeliveryPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35)_0%,_rgba(15,23,42,0)_60%)]" />
        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-8 sm:px-12">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 text-lg font-semibold text-sky-300">M</span>
            <span className="text-lg font-semibold tracking-wide text-white/90">Mold 3000</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 lg:flex">
            <Link className="transition hover:text-white" href="/catalog">Каталог</Link>
            <Link className="transition hover:text-white" href="/delivery">Доставка</Link>
            <a className="transition hover:text-white" href="/#cases">Кейсы</a>
            <Link className="transition hover:text-white" href="/contacts">Контакты</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12 sm:px-12">
        <h1 className="mb-6 text-3xl font-bold">Доставка</h1>

        <div className="grid gap-6 sm:grid-cols-2">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">По Турции</h2>
            <ul className="list-disc pl-5 text-white/80 space-y-2">
              <li>Отправка курьерскими службами (укажите: Yurtiçi, Aras и т.п.).</li>
              <li>Срок в среднем 1–3 рабочих дня по регионам.</li>
              <li>Стоимость по тарифам службы или фиксированная — укажите, если есть.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Международная</h2>
            <ul className="list-disc pl-5 text-white/80 space-y-2">
              <li>DHL/UPS/EMS — сроки 5–10 рабочих дней в зависимости от страны.</li>
              <li>Трек-номер передаём после отправки.</li>
              <li>Пошлины и налоги страны получателя оплачиваются получателем.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Самовывоз</h2>
            <p className="text-white/80">Адрес выдачи: укажите адрес и часы работы.</p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">Упаковка и безопасность</h2>
            <ul className="list-disc pl-5 text-white/80 space-y-2">
              <li>Качественная амортизационная упаковка. Защита от деформаций.</li>
              <li>Фото упаковки по запросу перед отправкой.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:col-span-2">
            <h2 className="mb-3 text-xl font-semibold">Оплата доставки и сроки изготовления</h2>
            <ul className="list-disc pl-5 text-white/80 space-y-2">
              <li>Стоимость доставки: укажите фиксированную сумму или «по тарифам перевозчика».</li>
              <li>Срок изготовления индивидуальных форм: укажите (например, 3–7 дней) + доставка.</li>
            </ul>
          </section>
        </div>

        <div className="mt-8">
          <a
            href={`https://wa.me/90XXXXXXXXXX?text=${encodeURIComponent("Здравствуйте, хочу уточнить условия доставки.")}`}
            target="_blank" rel="noopener"
            className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-neutral-900 shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-100"
          >
            Задать вопрос в WhatsApp
          </a>
        </div>
      </main>
    </div>
  );
}
