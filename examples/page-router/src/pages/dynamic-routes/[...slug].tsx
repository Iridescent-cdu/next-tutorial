import { useRouter } from 'next/router'

type Props = {}

const DynamicRoutePage = (props: Props) => {
  const router = useRouter()

  /** 
   * 服务端下： SSG 的构建过程是在没有实际用户请求的情况下完成的，因此无法获取动态路由参数，默认为 {}
   * 客户端下： 可以正确获取到路由路径参数
   */
  console.log(router.query)

  return (
    <div>DynamicRoutePage {router.query.slug}</div>
  )
}

/** 显示指定为SSR后，服务端可以获取到路由参数 */
export const getServerSideProps = async (context: any) => {
  return {
    props: {}
  }
}

export default DynamicRoutePage
