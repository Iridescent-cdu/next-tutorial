'use client'
import { handleSubmit } from '@/lib/action'
import React from 'react'
import { useFormStatus } from 'react-dom'

type Props = {}

const MetricsForm = (props: Props) => {

  return (
    <form >
      <input type="text" name='cpu' />
      <Button></Button>
    </form>
  )
}

export default MetricsForm
const Button = () => {
  const status = useFormStatus()
  return <button type='submit' formAction={handleSubmit}> {status.pending ? "提交中……" : "提交"}</button>
}
