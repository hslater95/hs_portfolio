import '../styles/globals.css'
import Layout from '../components/layout'
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

function MyApp({ Component, pageProps }) {
  return(
    <Layout> 
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          
        }}
      >
  <Component {...pageProps} />
  </MantineProvider>
  </Layout>
  )
}

export default MyApp
