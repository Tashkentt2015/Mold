import Link from "next/link";

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <main className="mx-auto max-w-6xl px-6 py-12 sm:px-12">

        {/* БОЛЬШАЯ СТРЕЛКА НАЗАД */}
        <Link href="/" className="group inline-flex items-center gap-3 mb-10 text-white/80 hover:text-white">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 transition group-hover:bg-white/10">
            {/* иконка стрелки влево */}
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="text-base font-semibold">На главную</span>
        </Link>

        <h1 className="mb-6 text-3xl font-bold">Контакты</h1>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
            <div>
              <div className="text-sm text-white/60">WhatsApp</div>
              <a
                className="text-lg font-semibold underline underline-offset-4"
                href="https://wa.me/90XXXXXXXXXX"
                target="_blank" rel="noopener"
              >+90 XXX XXX XX XX</a>
            </div>

            <div>
              <div className="text-sm text-white/60">Телефон</div>
              <a className="text-lg font-semibold" href="tel:+90XXXXXXXXXX">+90 XXX XXX XX XX</a>
            </div>

            <div>
              <div className="text-sm text-white/60">Email</div>
              <a className="text-lg font-semibold underline underline-offset-4" href="mailto:info@example.com">
                info@example.com
              </a>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/90XXXXXXXXXX?text=${encodeURIComponent("Здравствуйте, хочу оформить заказ/уточнить детали.")}`}
                target="_blank" rel="noopener"
                className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-neutral-900 shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-100"
              >
                Написать в WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
            <div className="text-sm text-white/60">Адрес</div>
            <div className="text-lg font-semibold">Укажите адрес и часы работы</div>
            <iframe
              className="w-full h-64 rounded-2xl border border-white/10"
              src="https://www.google.com/maps?q=Istanbul&output=embed"
              loading="lazy"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
