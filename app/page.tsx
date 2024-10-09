import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-[family-name:var(--font-geist-sans)]">
      <span className="text-5xl">Hola Tiux !!</span>

      <Link href={"/about"}> About Page </Link>
    </main>
  );
}
