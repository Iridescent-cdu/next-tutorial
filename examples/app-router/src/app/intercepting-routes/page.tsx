import Link from 'next/link'
import React from 'react'

type Props = {}

const InterceptingRoutesPage = (props: Props) => {
  return (
    <>
      <div>InterceptingRoutesPage</div>
      <Link href={'/intercepting-routes/photo'}>go to photo</Link>
    </>
  )
}

export default InterceptingRoutesPage
