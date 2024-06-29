'use server'

import { redirect } from "next/navigation"
import { saveMeal } from "./db"
import { revalidatePath } from "next/cache"
function isInvalidText(text) {
  return !text || text.trim() == ''
}
export const submitAction = async (prevState, formData) => {
  const meal = {
    title: formData.get('title') || '',
    summary: formData.get('summary') || '',
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name') || '',
    creator_email: formData.get('email') || '',
    slug: formData.get('slug')
  }

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    // throw new Error('Invalid input');
    return {
      message: 'Invalid input'
    }
  }

  await saveMeal(meal)
  revalidatePath('/', 'layout')
  // revalidatePath('/', 'page')
  redirect('/')
}
