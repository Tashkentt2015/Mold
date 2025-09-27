export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <main className="mx-auto max-w-6xl px-6 py-12 sm:px-12">
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
                href="https://wa.me/90XXXXXXXXXX?text=Merhaba,%20%C3%B6zel%20kal%C4%B1p%20istiyorum"
                target="_blank" rel="noopener"
                className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-neutral-900 shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-100"
              >
                Написать в WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
            <div className="text-sm text-white/60">Адрес</div>
            <div className="text-lg font-semibold">Укажи адрес здесь</div>
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
