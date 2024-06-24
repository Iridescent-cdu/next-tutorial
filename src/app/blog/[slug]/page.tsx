import styles from "./page.module.css";

export default function BlogPost({ params }) {
  return <main className={styles.main}>
    <h1>Blog Post</h1>
    <p>{params.slug}</p>
  </main>
}
