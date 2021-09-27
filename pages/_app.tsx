import { AppProps } from 'next/dist/next-server/lib/router/router';
import NextNprogress from 'nextjs-progressbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {

  return (
    <>
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
