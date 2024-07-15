import { BetterSqlite3Adapter } from '@lucia-auth/adapter-sqlite';
import sqlite from "better-sqlite3";
import { Lucia } from 'lucia';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { cache } from 'react';

const db = sqlite('database.db')

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

export const validateCookie = cache(
  async function () {
    const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null
    if (!sessionId) return null

    const result = await lucia.validateSession(sessionId)

    try {
      if (result.session && result.session.fresh) {
        const sessionCookie = lucia.createSessionCookie(result.session.id)
        cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
      }
      if (!result.session) {
        const sessionCookie = lucia.createBlankSessionCookie()
        cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
      }
    } catch (error) {
    }

    return result
  }
)

export async function logout() {
  'use server'
  const { session } = await validateCookie() || {}
  if (!session) return null
  await lucia.invalidateSession(session.id)
  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  return redirect("/login");
}
