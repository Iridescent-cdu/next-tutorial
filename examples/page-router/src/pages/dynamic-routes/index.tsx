type Props = {
  data: string
}

const DynamicRoutesPage = (props: Props) => {
  return (
    <div>
      <h1>DynamicRoutesPage</h1>
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

export default DynamicRoutesPage
