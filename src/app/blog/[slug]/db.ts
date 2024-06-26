import sql from 'better-sqlite3'

const db = sql('meal.db')

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return db.prepare('SELECT * FROM meals').all()
}
