/*
 * @Date: 2024-07-15 16:38:39
 * @Description: SSR(Dynamic)：server-rendered on demand
 */
import { GetServerSideProps } from 'next';

type Props = {
  time: string
}

const SSRPage = (props: Props) => {
  return (
    <div>
      <div>SSRPage</div>
      <div>{props.time}</div>
    </div>
  )
}

// 服务端渲染，即时请求数据并生成HTML返回给客户端
export const getServerSideProps = (async () => {
  return {
    props: {
      time: new Date().toISOString(),
    },
  }
}) satisfies GetServerSideProps<{
  time: string | number
}>

export default SSRPage
