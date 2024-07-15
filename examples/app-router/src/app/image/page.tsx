import Image from 'next/image'
import { Fragment } from 'react'
import Unsplash from '../../../public/images/christopher-unsplash.jpg'

/**
 * 设置页面 走ssr，但页面中的请求 依然会基于data cache机制获取数据
 * 不设置的时，会走Full Route Cache，直接读取服务器完整路由缓存，不重新渲染页面
 */
export const dynamic = 'force-dynamic'
// export const revalidate = 5 // 5 seconds 重新验证数据：ISR和重新验证数据

const ImagePage = async () => {
  /**
   * 数据缓存存储在.next的cache/fetch-cache目录下
   * 非standalone模式下npm run build 同样会去命中预构建产生的Data Cache
   * standalone模式下npm run build产物standalone目录中将没有Data Cache
   */
  await fetch(`${process.env.URL}/api`, {
    method: 'GET',
    // cache: 'no-store', // 禁用缓存，禁用后会重新渲染页面，走SSR
  })

  return (
    <Fragment>
      <img src={Unsplash.src} alt="Unsplash" style={{ width: '220px' }} />
      <Image src={Unsplash} alt="" width={220} />
      <div style={{ width: '220px', height: '146px', position: 'relative' }}>
        <Image
          // sizes="(max-width: 640px) 640w, (max-width: 750px) 750w, (max-width: 828px) 828w, (max-width: 1080px) 1080w, (max-width: 1200px) 1200w, (max-width: 1920px) 1920w, (max-width: 2048px) 2048w, (max-width: 3840px) 3840w, 100vw"
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          alt='' />
      </div>
    </Fragment>
  )
}

export default ImagePage
