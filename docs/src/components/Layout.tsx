import { SVGProps, Key, useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { FeedbackFish } from '@feedback-fish/react'
import { Hero } from '@/components/Hero'
import { Logo, Logomark } from '@/components/Logo'
import { MobileNavigation } from '@/components/MobileNavigation'
import { Navigation } from '@/components/Navigation'
import { Prose } from '@/components/Prose'

import { ThemeSelector } from '@/components/ThemeSelector'
import { ReactComponent } from '@/types'
import Footer from './Footer'
import Meta from './Meta'

const navigation = [
  {
    title: 'Introduction',
    links: [
      { title: 'About Everfund', href: '/' },
      { title: 'Installation', href: '/installation' },
    ],
  },
  {
    title: 'React SDK',
    links: [
      { title: 'Getting Started', href: '/docs/react-sdk/getting-started' },
      { title: 'React', href: '/docs/react-sdk/react' },
      { title: 'Next', href: '/docs/react-sdk/next' },
      // { title: 'Gatsby', href: '/docs/react-sdk/gatsby' },
    ],
  },
  {
    title: 'JS SDK',
    links: [
      { title: 'Getting Started', href: '/docs/js-sdk/getting-started' },
      { title: 'Vanilla JS', href: '/docs/js-sdk/vanilla-js' },
      { title: 'CDN', href: '/docs/js-sdk/cdn' },
      { title: 'Svelte', href: '/docs/js-sdk/svelte' },
      { title: 'Vue', href: '/docs/js-sdk/vue' },
      { title: 'WordPress', href: '/docs/js-sdk/wordpress' },
    ],
  },
  {
    title: 'Nocode',
    links: [
      { title: 'Getting Started', href: '/docs/no-code/getting-started' },
      { title: 'Query Strings', href: '/docs/no-code/query-strings' },
    ],
  },
]

export type NavigationProps = {
  title: string
  links: {
    title: string
    href: string
  }[]
}[]

function GitHubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" />
    </svg>
  )
}

// function DiscordIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
//   return (
//     <svg aria-hidden="true" viewBox="0 -28.5 256 256" {...props}>
//       <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"></path>
//     </svg>
//   )
// }

function Header({ navigation }: { navigation: NavigationProps }): JSX.Element {
  let [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 mx-auto border-b-2 border-b-slate-900/5 px-4 py-5 transition duration-500  [@supports(backdrop-filter:blur(0))]:bg-white/90',
        isScrolled
          ? 'backdrop-blur dark:bg-slate-900/95  dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75'
          : 'dark:bg-transparent',
      )}
    >
      <div className="mx-auto flex  flex-wrap items-center justify-between sm:px-6 lg:px-8">
        <div className="mr-6 flex lg:hidden">
          <MobileNavigation navigation={navigation} />
        </div>
        <div className="relative flex flex-grow basis-0 flex-row items-center">
          <Link href="/">
            <a aria-label="Home page" className="flex flex-row">
              <Logomark className="h-9 w-9 lg:hidden" />
              <Logo className="hidden h-7 w-auto fill-slate-700 dark:fill-sky-100 lg:block" />
            </a>
          </Link>
        </div>
        {/* <div className="-my-5 mr-6 sm:mr-8 md:mr-0">
          <Search />
        </div> */}
        <div className="relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow">
          <ThemeSelector className="relative z-10" />
          {/* <Link href="https://discord.gg/KDqDBMpk9t">
            <a className="group" aria-label="Discord">
              <DiscordIcon className="h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" />
            </a>
          </Link> */}
          <Link href="https://github.com/everfund/everfund">
            <a className="group" aria-label="GitHub">
              <GitHubIcon className="h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" />
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}

function useTableOfContents(tableOfContents: any) {
  let [currentSection, setCurrentSection] = useState(tableOfContents[0]?.id)

  let getHeadings = useCallback((tableOfContents: any[]) => {
    return tableOfContents
      .flatMap((node: { id: any; children: any[] }) => {
        return [node.id, ...node.children.map((child: { id: any }) => child.id)]
      })
      .map((id: string) => {
        let el = document.getElementById(id)
        if (!el) return

        let style = window.getComputedStyle(el)
        let scrollMt = parseFloat(style.scrollMarginTop)

        let top = window.scrollY + el.getBoundingClientRect().top - scrollMt
        return { id, top }
      })
  }, [])

  useEffect(() => {
    if (tableOfContents.length === 0) return
    let headings = getHeadings(tableOfContents)
    function onScroll() {
      let top = window.scrollY
      let current = headings[0] && headings[0].id
      for (let heading of headings) {
        if (heading && top >= heading.top) {
          current = heading.id
        } else {
          break
        }
      }
      setCurrentSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [getHeadings, tableOfContents])

  return currentSection
}

export function Layout({
  children,
  title,
  tableOfContents,
}: ReactComponent<{ tableOfContents: any }>) {
  let router = useRouter()
  let isHomePage = router.pathname === '/'
  let allLinks = navigation.flatMap((section) => section.links)
  let linkIndex = allLinks.findIndex((link) => link.href === router.pathname)
  let previousPage = allLinks[linkIndex - 1]
  let nextPage = allLinks[linkIndex + 1]
  let section = navigation.find((section) =>
    section.links.find((link) => link.href === router.pathname),
  )
  let currentSection = useTableOfContents(tableOfContents)

  function isActive(section: { id: any; children: any }) {
    if (section.id === currentSection) {
      return true
    }
    if (!section.children) {
      return false
    }
    return section.children.findIndex(isActive) > -1
  }

  return (
    <>
      <Header navigation={navigation} />
      <Meta />
      {isHomePage && <Hero />}

      <div className="relative mx-auto flex justify-center sm:px-2 lg:px-8 xl:px-12">
        <div className="hidden lg:relative lg:block lg:flex-none">
          <div className="absolute inset-y-0 right-0 w-[50vw] border-r-2 border-r-slate-900/5 bg-slate-50 dark:hidden" />
          <div className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-16 pl-0.5">
            <div className="absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" />
            <div className="absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800 dark:block" />
            <Navigation
              navigation={navigation}
              className="w-64 pr-8 xl:w-72 xl:pr-16"
            />
          </div>
        </div>
        <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
          <article>
            {(title || section) && (
              <header className="mb-9 space-y-1">
                {section && (
                  <p className="font-sans text-sm font-medium text-ever-500">
                    {section.title}
                  </p>
                )}
                {title && (
                  <h1 className="font-quincy text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
                    {title}
                  </h1>
                )}
              </header>
            )}
            <Prose>{children}</Prose>
          </article>

          <dl className="mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800">
            {previousPage && (
              <div>
                <dt className="font-display text-sm font-medium text-slate-900 dark:text-white">
                  Previous
                </dt>
                <dd className="mt-1">
                  <Link href={previousPage.href}>
                    <a className="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300">
                      <span aria-hidden="true">&larr;</span>{' '}
                      {previousPage.title}
                    </a>
                  </Link>
                </dd>
              </div>
            )}
            {nextPage && (
              <div className="ml-auto text-right">
                <dt className="font-display text-sm font-medium text-slate-900 dark:text-white">
                  Next
                </dt>
                <dd className="mt-1">
                  <Link href={nextPage.href}>
                    <a className="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300">
                      {nextPage.title} <span aria-hidden="true">&rarr;</span>
                    </a>
                  </Link>
                </dd>
              </div>
            )}
          </dl>
        </div>
        <div className="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
          <nav
            aria-labelledby="on-this-page-title"
            className="sticky top-0 w-56"
          >
            {tableOfContents.length > 0 && (
              <>
                <h2
                  id="on-this-page-title"
                  className="font-display text-sm font-medium text-slate-900 dark:text-white"
                >
                  On this page
                </h2>
                <ol role="list" className="mt-4 space-y-3 text-sm">
                  <li key="title">
                    <h3>
                      <Link href={`#`}>
                        <a className="font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300">
                          {title}
                        </a>
                      </Link>
                    </h3>
                  </li>
                  {tableOfContents.map(
                    (section: {
                      id: Key | null | undefined
                      title: string
                      children: any[]
                    }) => (
                      <li key={section.id}>
                        <h3>
                          <Link href={`#${section.id}`}>
                            <a
                              className={clsx(
                                isActive(section)
                                  ? 'text-ever-500'
                                  : 'font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300',
                              )}
                            >
                              {section.title}
                            </a>
                          </Link>
                        </h3>
                        {section.children.length > 0 && (
                          <ol
                            role="list"
                            className="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400"
                          >
                            {section.children.map(
                              (subSection: {
                                id: Key | null | undefined
                                title: string
                                children: any[]
                              }) => (
                                <li key={subSection.id}>
                                  <Link href={`#${subSection.id}`}>
                                    <a
                                      className={
                                        isActive(subSection)
                                          ? 'text-ever-500'
                                          : 'hover:text-slate-600 dark:hover:text-slate-300'
                                      }
                                    >
                                      {subSection.title}
                                    </a>
                                  </Link>
                                </li>
                              ),
                            )}
                          </ol>
                        )}
                      </li>
                    ),
                  )}
                </ol>
              </>
            )}
          </nav>
          <div
            className={clsx(
              'rounded-full bg-slate-100 text-center transition hover:bg-ever-500 hover:text-white',
              tableOfContents.length > 0 && 'mt-8',
            )}
          >
            <FeedbackFish projectId="3a707b6d109cfe">
              <button className="py-2 text-sm font-semibold">
                Send feedback
              </button>
            </FeedbackFish>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
