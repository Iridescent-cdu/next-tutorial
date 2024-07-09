import Link from 'next/link'
import React from 'react'

type Props = {}

const MetricsPage = async (props: Props) => {
  await fetch('http://localhost:3001/metrics', {
    method: 'GET',
    headers: {
      'x-id': 'MetricsPage'
    }
  }).then(res => res.json())

  return (
    <>
      <div>MetricsPage</div>
      <Link href={'/metrics/form'}>/metrics/form</Link>
      <div></div>
      <Link href={'/metrics/dashboard'} prefetch={false}>/metrics/dashboard</Link>
    </>
  )
}

export default MetricsPage
