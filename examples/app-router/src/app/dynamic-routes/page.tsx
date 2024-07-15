import Link from "next/link";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

export default function DynamicRoutesPage() {
  return <main className={styles.main}>
    <h1>The DynamicRoutesPage</h1>
    <Link href={'/dynamic-routes/post-1'}>post 1</Link>
    <Link href={'/dynamic-routes/post-2'}>post 2</Link>
  </main>
}
