import React from "react"
import "../styles/index.css"
import Head from "next/head"
import dynamic from "next/dynamic"
import * as Fathom from "fathom-client"
import { useEffect } from "react"
const CrispWithNoSSR = dynamic(() => import("../components/Crisp"), {
  ssr: false,
})


function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    // Initialize Fathom when the app loads
    // Example: yourdomain.com
    //  - Do not include https://
    //  - This must be an exact match of your domain.
    //  - If you're using www. for your domain, make sure you include that here.
    Fathom.load("WZSWSERW", {
      includedDomains: ["docs.everfund.io", "everfund.io", "everfund.co.uk"],
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete)

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete)
    }
  }, [router.events])

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
      <CrispWithNoSSR />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
