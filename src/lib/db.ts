import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'
import fs from 'node:fs'

const db = sql('meal.db')

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000))
  return db.prepare('SELECT * FROM meals').all()
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug1 = ?').get(slug)
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.slug, { lower: true })

  meal.instructions = xss(meal.instructions)

  const extension = meal.image.name.split('.').pop()

  const filename = `${meal.slug}.${extension}`

  const imageBuffer = await meal.image.arrayBuffer()

  const stream = fs.createWriteStream(`public/images/${filename}`)

  stream.write(Buffer.from(imageBuffer), (error) => {
    if (error) {
      throw new Error('save image failed')
    }
  })

  meal.image = `/images/${filename}`

  await new Promise(resolve => setTimeout(resolve, 3000))

  db.prepare(`
    INSERT INTO meals (title, summary, instructions, creator, creator_email,image, slug)
    VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
  `).run(meal)
}
