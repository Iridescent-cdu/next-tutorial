'use client'

import { Suspense, useOptimistic } from "react";

import styles from "./page.module.css";
import { notFound } from "next/navigation";
import { getMeals } from "@/lib/db";
import { collectAction } from "@/lib/action";

// export async function generateMetadata({ params }) {
//   return {
//     title: params.slug
//   }
// }

async function Post() {
  const meals = await getMeals()

  if (meals.length < 2) {
    notFound()
  }

  const [optimisticMeals, updateOptimisticMeals] = useOptimistic(meals, (prevState: any[], updatePostId) => {
    const mealIndex = prevState.findIndex(meal => meal.id == updatePostId)
    if (mealIndex === -1) {
      return prevState
    }
    return [
      ...prevState.slice(0, mealIndex),
      { ...prevState[mealIndex], collected: true },
      ...prevState.slice(mealIndex + 1)
    ]
  })

  const updateMeals = async (postId) => {
    updateOptimisticMeals(postId)
    await collectAction(postId)
  }

  // throw new Error('出错了')

  return <div> {optimisticMeals.map((meal: any) => <>
    <div key={meal.id}>{meal.title}</div>
    <button formAction={() => updateMeals(meal.id)}>收藏</button>
  </>)}</div>
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
