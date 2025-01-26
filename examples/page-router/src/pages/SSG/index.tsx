/*
 * @Date: 2024-07-14 23:39:54
 * @Description: SSG：prerendered as static HTML (uses getStaticProps)
 */
type Props = {
  data: string;
};

const SSGPage = (props: Props) => {
  return (
    <div>
      <h1>SSGPage</h1>
      <p>{props.data}</p>
    </div>
  );
};

// 预渲染，通过请求获取数据，生成静态文件
export async function getStaticProps() {
  return {
    props: {
      data: "hello world",
    },
  };
}

export default SSGPage;
