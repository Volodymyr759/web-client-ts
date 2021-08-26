import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import { useAuth } from '../hooks/auth.hook';
import { AuthContext } from '../context/auth-context';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {

  return (
    <>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="/css/all.css" type="text/css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>);
}

export default MyApp;
