/*
 * @Date: 2024-07-16 10:10:25
 * @Description: ISR：incremental static regeneration (uses revalidate in getStaticProps)
 */
import { GetStaticPaths, GetStaticProps } from 'next'

type Props = {
  name: string
}

const ISRPage = (props: Props) => {
  if (!props.name) return <div>Loading...</div >

  return (
    <div>ISRPage {props.name}</div>
  )
}

// 在构建时获取数据，生成静态页面，在请求时返回静态页面，并在运行时指定时间间隔内自动刷新静态页面
export const getStaticProps = (async function () {
  return {
    props: {
      name: Math.random().toString(),
    },
    revalidate: 3, // 指定revalidate后 SSG 转为 ISR
  }
}) satisfies GetStaticProps<{
  name: string
}> // 使用 satisfies 我们可以验证表达式的类型是否与某种类型匹配，而无需更改该表达式的结果类型 https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html

// getStaticPaths is required for dynamic SSG pages：动态路由下使用getStaticProps进行SSG渲染时必须使用getStaticPaths
export const getStaticPaths = (async function () {
  return {
    paths: [
      {
        params: {
          slug: ['1']
        }
      }
    ],
    fallback: true
  }
}) satisfies GetStaticPaths<{

}>

export default ISRPage
