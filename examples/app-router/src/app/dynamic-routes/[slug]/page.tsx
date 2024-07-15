'use client'
import { Suspense, useOptimistic, useState } from "react";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
import { getMeals } from "@/lib/db";

// export async function generateMetadata({ params }) {
//   return {
//     title: params.slug
//   }
// }

export default function BlogPost({ params }) {
  // const meals = await getMeals()
  const meals = []

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
  }

  return <main className={styles.main}>
    <h1>Blog Post</h1>
    <p>{params.slug}</p>
    {/* <Suspense fallback={<div>loading</div>}> */}
    <div>
      {optimisticMeals.map((meal: any) => <>
        <div key={meal.id}>{meal.title}</div>
        <form>
          <button formAction={() => updateMeals(meal.id)}>收藏</button>
        </form>
      </>)}
    </div>
    {/* </Suspense> */}
  </main >
}

