import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Link href={"/Static"} prefetch>Static</Link>
      <Link href={"/SSR"} prefetch>SSR</Link>
      <Link href={"/SSG"} prefetch>SSG</Link>
      <Link href={"/ISR/1"} prefetch>ISR</Link>
      {/* <a href="/ISR/1">Anchor Link</a> */}
    </main>
  );
}
