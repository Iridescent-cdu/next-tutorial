import { Suspense } from "react";
import { getMeals } from "./db";
import styles from "./page.module.css";

async function Post() {
  await getMeals()
  return <div>loading out</div>
}

export default function BlogPost({ params }) {


  return <main className={styles.main}>
    <h1>Blog Post</h1>
    <p>{params.slug}</p>
    <Suspense fallback={<div>loading</div>}>
      <Post />
    </Suspense>
  </main>
}
