import { GetStaticProps } from 'next'
import React from 'react'

type Props = {
  time: string
}

const RenderPage = (props: Props) => {
  return (
    <div>
      <div>RenderPage</div>
      <div>{props.time}</div>
    </div>
  )
}

export const getStaticProps = (async () => {
  return {
    props: {
      time: new Date().toISOString(),
    },
  }
}) satisfies GetStaticProps<{
  time: string | number
}> // 使用 satisfies 允许定义更宽松的类型签名，并且最终会进行类型缩小，输出实际类型

export default RenderPage
