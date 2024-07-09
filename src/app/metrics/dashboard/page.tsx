import Link from 'next/link'
import React from 'react'

type Props = {}
// export const dynamic = 'force-dynamic'
const MetricsDashboard = async (props: Props) => {
  const data = await fetch('http://localhost:3001/metrics', {
    method: 'GET',
    headers: {
      'x-id': 'MetricsDashboard'
    },
    next: {
      tags: ['metrics']
    }
  }).then(res => res.json())

  return (
    <>
      <div>MetricsDashboard</div>
      {data.map((item: any, index: number) => (<div key={index}>{item.cpu}</div>))}
    </>
  )
}

export default MetricsDashboard
