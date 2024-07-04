import Link from 'next/link'
import React from 'react'

type Props = {}

const FeedPage = (props: Props) => {
  return (
    <>
      <div>FeedPage</div>
      <Link href={'/feed/photo'}>go to photo</Link>
    </>
  )
}

export default FeedPage
