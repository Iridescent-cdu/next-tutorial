import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Link href={"/dynamic-routes"} prefetch>DynamicRoutes</Link>
      <Link href={"/dynamic-routes/1"} prefetch>DynamicRoutes 1</Link>
      {/* <a href="/dynamic-routes/1">DynamicRoutes 1</a> */}
    </main>
  );
}
