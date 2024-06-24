import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <a href="/about" >to about us</a>
      <Link href="/about" >to about us</Link>
    </main >
  );
}
