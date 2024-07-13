import sql from 'better-sqlite3'

const db = sql('meal.db')

db.prepare(`
    CREATE TABLE IF NOT EXISTS meals (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT NOT NULL UNIQUE,
      title TEXT NOT NULL,
      image TEXT NOT NULL,
      summary TEXT NOT NULL,
      instructions TEXT NOT NULL,
      creator TEXT NOT NULL,
      creator_email TEXT NOT NULL
   )
`).run();

db.prepare(`
   CREATE TABLE IF NOT EXISTS session (
    id TEXT NOT NULL PRIMARY KEY,
    expires_at INTEGER NOT NULL,
    user_id TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id)
   )
`).run();

db.prepare(`
  CREATE TABLE IF NOT EXISTS user (
    id TEXT NOT NULL PRIMARY KEY
  )
`).run();

const stmt = db.prepare(`
   INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email)
   VALUES (@slug, @title, @image, @summary, @instructions, @creator, @creator_email)
`);

const dummyMeals = [
  {
    slug: 'chicken-curry',
    title: 'Chicken Curry',
    image: 'https://www.themealdb.com/images/media/meals/xrsqqx1511637373.jpg',
    summary: 'Chicken curry is a type of curry that is made with chicken as its primary ingredient.',
    instructions: 'In a large skillet, heat2 tablespoons of oil over medium heat. Add the chopped onion and cook until',
    creator: 'Max Schwarz',
    creator_email: 'max@example.com',
  }
]

for (const meal of dummyMeals) {
  stmt.run(meal)
}

const userStmt = db.prepare(`
   INSERT INTO user (id)
   VALUES (@id)
`);

userStmt.run({ id: '1' })
