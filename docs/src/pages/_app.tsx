/* eslint-disable @typescript-eslint/no-explicit-any */
import Head from 'next/head'
import { slugifyWithCounter } from '@sindresorhus/slugify'
import { Crisp } from 'crisp-sdk-web'
import type { AppType } from 'next/dist/shared/lib/utils'
import * as Fathom from 'fathom-client'

import { Layout } from '@/components/Layout'

import 'focus-visible'
import '@/styles/tailwind.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function getNodeText(node: any) {
  let text = ''
  for (const child of node.children ?? []) {
    if (typeof child === 'string') {
      text += child
    }
    text += getNodeText(child)
  }
  return text
}

function collectHeadings(nodes: any, slugify = slugifyWithCounter()): any {
  const router = useRouter()
  const sections = []
  for (const node of nodes) {
    // If the SDK is not the current SDK, skip this section
    if (node.name === 'If' && node.attributes?.sdk) {
      if (node.attributes.sdk !== (router.query.sdk ?? 'react')) {
        continue
      }
    }

    if (node.name === 'Heading' || node.name === 'h3') {
      const title = getNodeText(node)
      if (title) {
        const id = slugify(title)
        node.attributes.id = id
        if (node.attributes.level === 3) {
          if (!sections[sections.length - 1]) {
            throw new Error(
              'Cannot add `h3` to table of contents without a preceding `h2`'
            )
          }
          sections[sections.length - 1].children.push({
            ...node.attributes,
            title,
          })
        } else {
          sections.push({ ...node.attributes, title, children: [] })
        }
      }
    }

    sections.push(...collectHeadings(node.children ?? [], slugify))
  }

  return sections
}

const MyApp: AppType = ({
  Component,
  pageProps,
}: {
  Component: any
  pageProps: any
}) => {
  const router = useRouter()

  useEffect(() => {
    // Load crisp
    if (process.env.NODE_ENV == 'production' && process.env.CRISP_TOKEN) {
      Crisp.configure(process.env.CRISP_TOKEN)
    }

    // Initialize Fathom when the app loads
    // Example: yourdomain.com
    //  - Do not include https://
    //  - This must be an exact match of your domain.
    //  - If you're using www. for your domain, make sure you include that here.
    Fathom.load('WZSWSERW', {
      url: `https://energetic-soulful.everfund.io/script.js`,
      includedDomains: ['docs.everfund.io'],
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete)

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [router.events])

  const title = pageProps.markdoc?.frontmatter.title

  const pageTitle =
    pageProps.markdoc?.frontmatter.pageTitle ||
    `${pageProps.markdoc?.frontmatter.title} - Docs`

  const description = pageProps.markdoc?.frontmatter.description

  const tableOfContents = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : []
    
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <Layout title={title} tableOfContents={tableOfContents}>
        <Component {...pageProps} />
      </Layout>
      {/* {process.env.NODE_ENV == 'production' && (
        <Crisp crispWebsiteId="a4c6641c-a31d-4038-8663-bae82f05ea62" />
      )} */}
    </>
  )
}

export default MyApp
