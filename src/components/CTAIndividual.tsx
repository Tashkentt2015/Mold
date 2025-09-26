import WhatsAppButton from './WhatsAppButton';

export default function CTAIndividual(){
  return (
    <section className="rounded-2xl border p-6 text-center grid gap-3">
      <h2 className="text-xl font-semibold">Özel Kalıp Siparişi</h2>
      <p className="text-sm">Minimum özel sipariş: ₺12.500. Fiyata 3D model dahildir.</p>
      <WhatsAppButton
        label="WhatsApp’tan Talep Gönder"
        text="Merhaba, özel kalıp istiyorum. Minimum ₺12.500 olduğunu biliyorum."
      />
    </section>
  );
}
