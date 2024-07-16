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
}> // 使用 satisfies 允许定义更宽松的类型签名，并且最终会进行类型缩小，输出实际类型

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
