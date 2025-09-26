import Link from 'next/link';

export default function WhatsAppButton({label, text}:{label:string;text:string}){
  const phone = '90XXXXXXXXXX'; // замените на ваш номер без +
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  return (
    <Link href={url} prefetch={false} target="_blank" rel="noopener noreferrer"
      className="inline-flex items-center rounded-xl px-4 py-3 border text-sm font-medium hover:opacity-90">
      {label}
    </Link>
  );
}
