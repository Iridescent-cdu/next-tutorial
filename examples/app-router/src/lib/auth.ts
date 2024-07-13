import { BetterSqlite3Adapter } from '@lucia-auth/adapter-sqlite';
import sqlite from "better-sqlite3";
import { Lucia } from 'lucia';
import { cookies } from 'next/headers';

const db = sqlite('meal.db')

const adapter = new BetterSqlite3Adapter(db, {
  user: 'user',
  session: 'session'
})

const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      secure: process.env.NODE_ENV === "production"
    },
    expires: false
  },
})

export async function setCookie(params: any) {
  const session = await lucia.createSession(params.userId, {
    // username: params.username,
  })

  const sessionCookie = lucia.createSessionCookie(session.id)

  cookies().set(sessionCookie)
}

export async function validateCookie() {
  const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null
  if (!sessionId) return null

  const { session, user } = await lucia.validateSession(sessionId)

  try {
    if (session && session.fresh) {
      const sessionCookie = lucia.createSessionCookie(session.id)
      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
    }
    if (!session) {
      const sessionCookie = lucia.createBlankSessionCookie()
      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
    }
  } catch (error) {
  }

  return user
}
