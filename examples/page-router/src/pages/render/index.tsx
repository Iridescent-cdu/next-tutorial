import { GetServerSideProps } from 'next';

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

export const getServerSideProps = (async () => {
  return {
    props: {
      time: new Date().toISOString(),
    },
  }
}) satisfies GetServerSideProps<{
  time: string | number
}>

export default RenderPage
