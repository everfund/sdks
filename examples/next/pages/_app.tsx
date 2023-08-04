import type { AppProps } from 'next/app';
import '@everfund/example-css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
