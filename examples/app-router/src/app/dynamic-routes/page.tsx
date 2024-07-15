import Link from "next/link";
import styles from "./page.module.css";

/** 静态页面 会走Full Route Cache */
export default async function DynamicRoutesPage() {
  /** 预构建也会产生Data Cache数据缓存 */
  await fetch(`${process.env.URL}/api`, {
    method: 'GET'
  })

  return <main className={styles.main}>
    <h1>The DynamicRoutesPage</h1>
    <Link href={'/dynamic-routes/post-1'}>post 1</Link>
    <Link href={'/dynamic-routes/post-2'}>post 2</Link>
    <Link href={'/image'}>image</Link>
  </main>
}
