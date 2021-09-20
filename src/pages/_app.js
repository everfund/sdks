import React from 'react'
// import '@docsearch/react/dist/style.css'
import '../styles/index.css'
import Head from 'next/head'
import dynamic from "next/dynamic";

const CrispWithNoSSR = dynamic(() => import("../components/Crisp"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
        @media (max-width: 390px) {
            .formkit-slide-in {
              display: none;
            }
          }
          @media (max-height: 740px) {
            .formkit-slide-in {
              display: none;
            }
          }
          `,
          }}
        />
      </Head>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      {/* <img src="https://static.scarf.sh/a.png?x-pxid=c03d3ddd-b47e-4e26-a9b2-9df68b2ac970" /> */}
      {/* <SearchProvider> */}
      <CrispWithNoSSR />
        <Component {...pageProps} />
      {/* </SearchProvider> */}
    </>
  )
}

export default MyApp
