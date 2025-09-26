"use client";
import Link from "next/link";
export default function LangSwitcher(){
  return (
    <nav className="flex gap-3 text-sm">
      <Link href="/tr" className="underline">TR</Link>
      <Link href="/en" className="underline">EN</Link>
      <Link href="/de" className="underline">DE</Link>
    </nav>
  );
}
