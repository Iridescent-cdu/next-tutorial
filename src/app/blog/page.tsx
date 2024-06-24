import Link from "next/link";
import styles from "./page.module.css";

export default function BlogPage() {
  return <main className={styles.main}>
    <h1>The Blog</h1>
    <Link href={'/blog/post-1'}>post 1</Link>
    <Link href={'/blog/post-2'}>post 2</Link>
  </main>
}
