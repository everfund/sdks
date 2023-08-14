import { Head, Html, Main, NextScript } from 'next/document'

const themeScript = `
 let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

 function updateTheme(savedTheme) {
  let theme = 'system'
  try {
   if (!savedTheme) {
    savedTheme = window.localStorage.theme
   }
   if (savedTheme === 'dark') {
    theme = 'dark'
    document.documentElement.classList.add('dark')
   } else if (savedTheme === 'light') {
    theme = 'light'
    document.documentElement.classList.remove('dark')
   } else if (mediaQuery.matches) {
    document.documentElement.classList.add('dark')
   } else {
    document.documentElement.classList.remove('dark')
   }
  } catch {
   theme = 'light'
   document.documentElement.classList.remove('dark')
  }
  return theme
 }

 function updateThemeWithoutTransitions(savedTheme) {
  updateTheme(savedTheme)
  document.documentElement.classList.add('[&_*]:!transition-none')
  window.setTimeout(() => {
   document.documentElement.classList.remove('[&_*]:!transition-none')
  }, 0)
 }

 document.documentElement.setAttribute('data-theme', updateTheme())

 new MutationObserver(([{ oldValue }]) => {
  let newValue = document.documentElement.getAttribute('data-theme')
  if (newValue !== oldValue) {
   try {
    window.localStorage.setItem('theme', newValue)
   } catch {}
   updateThemeWithoutTransitions(newValue)
  }
 }).observe(document.documentElement, { attributeFilter: ['data-theme'], attributeOldValue: true })

 mediaQuery.addEventListener('change', updateThemeWithoutTransitions)
 window.addEventListener('storage', updateThemeWithoutTransitions)
`

export default function Document() {
  return (
    <Html
      className="scroll-smooth antialiased [font-feature-settings:'ss01']"
      lang="en"
    >
      <Head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link
          rel="preload"
          as="font"
          crossOrigin=""
          href="https://use.typekit.net/bwn3xbd.css"
        />
        <link
          rel="preload"
          href="/fonts/plus-jakarta/PlusJakartaSans-Regular.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/plus-jakarta/PlusJakartaSans-Italic.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/plus-jakarta/PlusJakartaSans-Medium.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/plus-jakarta/PlusJakartaSans-SemiBold.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/plus-jakarta/PlusJakartaSans-Bold.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-white dark:bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
