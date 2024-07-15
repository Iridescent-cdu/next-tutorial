import Link from 'next/link'
export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <nav>
        <Link href="/parallel-routes/page-views">Page Views</Link>
        <Link href="/parallel-routes/visitors">Visitors</Link>
      </nav>
      <div>{children}</div>
    </>
  )
}
