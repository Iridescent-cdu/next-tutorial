import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default function App({ Component, pageProps }: AppProps) {
  return <Layout>
    <Head>
      <title>Page Router</title>
      <meta property="og:title" content="My page title" key="title" />
    </Head>
    <Component {...pageProps} />
  </Layout>;
}
