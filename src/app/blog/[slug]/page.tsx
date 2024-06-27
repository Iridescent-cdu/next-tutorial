import { Suspense } from "react";
import { getMeals } from "../../../lib/db";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

async function Post() {
  const meals = await getMeals()

  if (meals.length < 2) {
    notFound()
  }
  // throw new Error('出错了')
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
