import { getMeals } from "./db";
import styles from "./page.module.css";

export default async function BlogPost({ params }) {
  await getMeals()

  return <main className={styles.main}>
    <h1>Blog Post</h1>
    <p>{params.slug}</p>
  </main>
}
