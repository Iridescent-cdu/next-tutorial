import React from 'react'

type Props = {
  children: React.ReactNode
}

const Layout = async (props: Props) => {
  // await fetch('http://localhost:3001/metrics', {
  //   method: 'GET',
  //   headers: {
  //     'x-id': 'MetricsPage'
  //   },
  //   next: {
  //     revalidate: 5
  //   }
  // }).then(res => res.json())

  return (
    <div>{props.children}</div>
  )
}

export default Layout
