type Props = {
  data: string
}

const ArticlePage = (props: Props) => {
  return (
    <div>
      <h1>ArticlePage</h1>
      <p>{props.data}</p>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      data: "hello world"
    }
  }
}

export default ArticlePage
