/*
 * @Date: 2024-07-13 23:09:34
 * @Description: Static：prerendered as static content
 */
import { useRouter } from 'next/router'

type Props = {}

// 静态页面，构建时生成，不需要在服务端通过请求获取数据
const StaticPage = (props: Props) => {
  const router = useRouter()

  /** 
   * 无论何种渲染方式，客户端的js代码都会执行一遍
   * 服务端下： SSG 的构建过程是在没有实际用户请求的情况下完成的，因此在服务端（1.打印 2.水合数据）中无法获取动态路由参数，默认为 {}
   * 客户端下： 客户端的js代码即时执行，可以正确获取到路由路径参数
   */
  console.log(router.query)

  return (
    <div>StaticPage {router.query.slug}</div>
  )
}

/** 显示指定为SSR后，服务端可以获取到路由参数 */
// export const getServerSideProps = async (context: any) => {
//   return {
//     props: {}
//   }
// }

export default StaticPage
