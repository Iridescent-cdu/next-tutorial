'use client'
import { login } from '@/lib/action'
import React from 'react'
import { useFormState } from 'react-dom'

type Props = {}

const LoginPage = (props: Props) => {
  const [state, formAction] = useFormState(login, {
    message: ''
  })

  return (
    <form action={formAction}>
      <label htmlFor="username">用户名</label>
      <input type="text" name='username' id='username' />
      <label htmlFor="password">密码</label>
      <input type="password" name='password' id="password" />
      <button type='submit'>登录</button>
      {state?.message}
    </form>
  )
}

export default LoginPage
