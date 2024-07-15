'use client'

import { useSelectedLayoutSegment } from "next/navigation"
import { Fragment } from "react"

export default function Layout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode
  analytics: React.ReactNode
  team: React.ReactNode
}) {
  const segment = useSelectedLayoutSegment('analytics')

  console.log(segment)

  return (
    <Fragment>
      {analytics}
      {children}
      {team}
    </Fragment>
  )
}
