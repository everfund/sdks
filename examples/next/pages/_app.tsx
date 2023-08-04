import type { AppProps } from 'next/app';
import '../styles/modern-normalize.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
