import { validateCookie } from '@/lib/auth'
import { redirect } from 'next/navigation'
import React from 'react'

const AuthLayout = async ({ children }) => {
  const { user } = await validateCookie() || {}

  if (user) {
    redirect('/')
  }

  return (
    <div>{children}</div>
  )
}

export default AuthLayout
