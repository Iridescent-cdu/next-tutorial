import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Unsplash from '../../../../public/images/christopher-unsplash.jpg'
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
      <img src={Unsplash.src} alt="Unsplash" style={{ width: '220px' }} />
      <Image src={Unsplash} alt="" width={220} />
      <div style={{ width: '220px', height: '146px', position: 'relative' }}>
        <Image
          // sizes="(max-width: 640px) 640w, (max-width: 750px) 750w, (max-width: 828px) 828w, (max-width: 1080px) 1080w, (max-width: 1200px) 1200w, (max-width: 1920px) 1920w, (max-width: 2048px) 2048w, (max-width: 3840px) 3840w, 100vw"
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          alt='' />
      </div>
      {data.map((item: any, index: number) => (<div key={index}>{item.cpu}</div>))}
    </>
  )
}

export default MetricsDashboard
