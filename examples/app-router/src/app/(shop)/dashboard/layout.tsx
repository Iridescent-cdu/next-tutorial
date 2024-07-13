'use client'
import { useSelectedLayoutSegment } from "next/navigation"

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
    <>
      {analytics}
      {children}
      {team}
    </>
  )
}
