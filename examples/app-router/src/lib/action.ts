'use server'
import { redirect } from "next/navigation"
import { getUser, saveMeal } from "./db"
import { revalidatePath, revalidateTag } from "next/cache"
import { setCookie } from "./auth"

function isInvalidText(text: string) {
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

export const loginAction = async (_prevState, formData) => {
  try {
    const username = formData.get('username')

    const password = formData.get('password')

    const user = await getUser(username)

    if (!user) {
      return {
        message: 'Invalid username or password'
      }
    }

    const { createHash } = await import('node:crypto')

    if (user.password !== createHash('sha256').update(password).digest('hex')) {
      return {
        message: 'Invalid username or password'
      }
    }

    setCookie({
      userId: '1',
      username: user.username,
      password: user.password
    })

    redirect('/')
  } catch (error) {
    return {
      message: 'Login Error'
    }
  }
}
