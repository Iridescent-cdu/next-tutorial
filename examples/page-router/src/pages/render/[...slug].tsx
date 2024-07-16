import { GetStaticPaths, GetStaticProps } from 'next'

type Props = {
  name: string
}

const OtherRenderPage = (props: Props) => {
  if (!props.name) return <div>Loading...</div >

  return (
    <div>OtherRenderPage {props.name}</div>
  )
}

export const getStaticProps = (async function () {
  return {
    props: {
      name: Math.random().toString(),
    },
    revalidate: 3,
  }
}) satisfies GetStaticProps<{
  name: string
}>

export const getStaticPaths = (async function () {
  return {
    paths: [
      { params: { slug: ['1'] } }
    ],
    fallback: true
  }
}) satisfies GetStaticPaths<{

}>

export default OtherRenderPage
