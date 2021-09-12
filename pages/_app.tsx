import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import NextNprogress from 'nextjs-progressbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {

  return (
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossOrigin="anonymous" />
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="/css/all.css" type="text/css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=0.5" />
      </Head>
      <NextNprogress
        color="#6610F2"
        startPosition={0.4}
        stopDelayMs={200}
        height={2}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>);
}

export default MyApp;
