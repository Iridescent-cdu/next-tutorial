'use server'

import { redirect } from "next/navigation"
import { saveMeal } from "./db"

export const submitAction = async (formData) => {
  const meal = {
    title: formData.get('title') || '',
    summary: formData.get('summary') || '',
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name') || '',
    creator_email: formData.get('email') || '',
    slug: formData.get('slug')
  }

  await saveMeal(meal)

  redirect('/')
}
