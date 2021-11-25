import * as React from "react"
import Link from "next/link"

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const navigation = {
  support: [
    { name: "Main Website", href: "https://everfund.io/" },
    { name: "Donation Links", href: "https://everfund.io/donation-link/" },
    { name: "Blog", href: "https://everfund.io/blog/" },
    { name: "Developer Docs", href: "https://docs.everfund.io/" },
  ],
  legal: [
    {
      name: "Cookies Policy",
      href: "https://everfund.io/legal/cookies-policy/",
    },
    {
      name: "Privacy Policy",
      href: "https://everfund.io/legal/privacy-policy/",
    },
    {
      name: "Terms And Conditions",
      href: "https://everfund.io/legal/terms-and-conditions/",
    },
    {
      name: "Sub-Processors",
      href: "https://everfund.io/legal/sub-processors/",
    },
  ],
  social: [
    // {
    //   name: "Facebook",
    //   href: "#",
    //   icon: (props) => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       <path
    //         fillRule="evenodd"
    //         d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   ),
    // },
    // {
    //   name: "Instagram",
    //   href: "#",
    //   icon: (props) => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       <path
    //         fillRule="evenodd"
    //         d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   ),
    // },
    {
      name: "Twitter",
      href: "https://twitter.com/everfund",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/everfund",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    // {
    //   name: "Dribbble",
    //   href: "#",
    //   icon: (props) => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       <path
    //         fillRule="evenodd"
    //         d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   ),
    // },
  ],
}

export const Footer = (props) => {
  return (
    <footer className="bg-ivy" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto px-4 py-12 max-w-7xl sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:gap-8 xl:grid-cols-12">
          <div className="grid gap-8 grid-cols-3 xl:col-span-9">
            <div className="">
              <svg
                viewBox="0 0 2698.39 585.2"
                aria-labelledby="Everfund Logo"
                className="w-auto h-8 sm:h-10"
              >
                <title>Everfund Logo</title>
                <path
                  d="M342.87 585.2c-15.25 0-31.68-8.15-51.71-25.64-9.68-8.46-17.65-16.89-20.29-19.74C150.66 426.64 76.88 346.6 38.72 288 2.85 232.89 0 200.58 0 164.06c0-37 18.05-78.13 48.29-110.12C80.66 19.7 123.08 0 164.67 0h.14c124.29 0 200.77 144.46 204 150.61a324.3 324.3 0 0044.79 62.16c34.4 37.23 69.66 56.12 104.74 56.12h1A106 106 0 00593.5 238a103.07 103.07 0 0030.55-73.53A104.57 104.57 0 00519.61 60c-27.55 0-60.14 5.08-93 42.71a30 30 0 11-45.22-39.44C430.85 6.58 483.93 0 519.57 0 610.24 0 684 73.79 684 164.44a162.68 162.68 0 01-48.2 116 165.65 165.65 0 01-115.93 48.4h-1.59c-123.06 0-198.89-143.09-202.78-150.6a324.66 324.66 0 00-44.77-61.77C246.84 90.73 209 60 164.8 60h-.08C139.54 60 113 72.84 91.89 95.16 72.22 116 60 142.37 60 164.06c0 25 0 46.64 29 91.19 35.08 53.89 108.29 132.93 223.8 241.63.6.56 1.17 1.15 1.72 1.76a183.91 183.91 0 0025.4 23.18c10.12-8.28 29.55-25.8 61.73-57.93 29.93-29.88 63.73-65.3 82.2-86.13a30 30 0 0144.9 39.8c-18 20.28-55.35 59.78-92 96-19.27 19-35.44 34.35-48.06 45.47-23.03 20.3-33.31 26.17-45.82 26.17z"
                  fill="currentColor"
                  className="text-sunny-400"
                ></path>
                <path
                  fill="currentColor"
                  className="text-white"
                  d="M2647.26 153h-10.77v-4h25.94v4h-10.77v23.72h-4.4zm20-4h4.4l11.07 22.17L2694 149h4.4v27.72h-4.4v-19.3l-9.26 19.25h-3.64l-9.4-19.25v19.25h-4.4zM1038.53 356.2H865c8.48 29.53 36.13 44.92 70.92 44.92 22.75 0 42.82-5.82 59.77-19.55l27.21 27c-19.18 22.46-52.63 38.26-93.67 38.26-63.78 0-120.88-40.34-120.88-112.3 0-72.79 58-112.31 117.31-112.31 58.9.04 125.81 38.72 112.87 133.98zm-174.4-40.77h121.32c-3.57-30.78-31.22-46.17-59.32-46.17-27.66 0-54.42 14.98-62 46.17zM1037.06 226.42h61.11l64.23 150.16 63.78-150.16h61.56l-97.69 216.29h-55.75zM1514.1 356.2h-173.51c8.47 29.53 36.13 44.92 70.92 44.92 22.75 0 42.82-5.82 59.77-19.55l27.21 27c-19.18 22.46-52.64 38.26-93.67 38.26-63.79 0-120.88-40.34-120.88-112.3 0-72.79 58-112.31 117.31-112.31 58.88.04 125.75 38.72 112.85 133.98zm-174.41-40.77H1461c-3.57-30.78-31.22-46.17-59.33-46.17-27.67 0-54.39 14.98-61.98 46.17zM1691.49 223.92v53.25a92.5 92.5 0 00-15.17-1.25c-45 0-73.15 29.11-73.15 72.37v94.42h-59.77V226.42h59.77v56.15c8-33.27 30.78-60.31 72.71-60.31a66.9 66.9 0 0115.61 1.66zM1794.56 218.52v7.9h59.77v44.51h-59.77v171.78h-59.77V270.93h-29.44v-44.51h29.44v-14.14c0-63.65 47.28-74 78.06-74 12 0 28.55 1.24 41.48 8.32v43.67c-11.15-5-21.85-4.58-25.87-4.58-22.75-.04-33.9 11.61-33.9 32.83zM2096 226.42v216.29h-59.77v-29.53c-12.93 19.14-36.57 33.69-71.37 33.69-47.28 0-87.42-27.45-87.42-93.17V226.42h59.77v118.13c0 31.61 18.29 52.41 49.51 52.41 30.33 0 49.51-20.8 49.51-52.41V226.42zM2356.25 315.43v127.28h-59.77V324.58c0-31.61-18.28-52.41-49.51-52.41-30.77 0-49.51 20.8-49.51 52.41v118.13h-59.77V226.42h59.77V256c12.94-19.13 36.13-33.69 70.92-33.69 47.73-.05 87.87 27.4 87.87 93.12zM2618.75 147.39v295.32H2559V413.6h-1.34c-5.8 12.06-32.56 33.27-74 33.27-54 0-111.52-37.43-111.52-112.3s57.54-112.31 111.52-112.31c41.48 0 68.24 21.21 74 33.27h.89V147.39zm-58.43 187.18c0-40.77-31.23-62.4-64.68-62.4s-64.64 22.05-64.64 62.4 31.19 62.43 64.64 62.43 64.68-21.67 64.68-62.43z"
                ></path>
              </svg>
            </div>
            <div className="md:grid md:gap-8 md:col-span-2 md:grid-cols-2">
              <div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-white text-sm font-semibold tracking-wider uppercase">
                    Menu
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-leafy-100 hover:text-white hover:text-opacity-100 text-opacity-75 text-base transition"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 md:mt-0">
                <h3 className="text-white text-sm font-semibold tracking-wider uppercase">
                  Legal
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-leafy-100 hover:text-white hover:text-opacity-100 text-opacity-75 text-base transition"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:col-span-3 xl:mt-0">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase">
              Subscribe to our newsletter
            </h3>
            <p className="text-leafy-100 mt-4 text-opacity-75 text-base">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="placeholder-gray-500 focus:placeholder-gray-200 bg-leafy-800 focus:ring-leafy-500 focus:ring-offset-ivy focus:z-10 px-4 py-2 w-full min-w-0 text-white text-sm border focus:border-0 border-transparent rounded-none focus:outline-none appearance-none focus:ring-2 focus:ring-offset-2"
                placeholder="Enter your email"
              />
              <div className="mt-3 sm:flex-shrink-0 sm:mt-0">
                <button
                  type="submit"
                  className="text-leafy-100 bg-leafy-500 hover:bg-leafy-600 focus:ring-leafy-500 focus:ring-offset-ivy flex items-center justify-center px-4 py-2 w-full text-base font-medium border border-transparent rounded-none focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-gray-300 text-gray-400"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-gray-400 text-base md:order-1 md:mt-0">
            &copy; {new Date().getFullYear()} Everfund Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
Footer.displayName = "Footer"
