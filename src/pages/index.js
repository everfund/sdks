import * as React from 'react'
import { ParentSize } from '@visx/responsive'
import Head from 'next/head'
import Link from 'next/link'

//
import { siteConfig } from '../siteConfig'

import { Banner } from '../components/Banner'
import { Sticky } from '../components/Sticky'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { ClientsMarquee } from '../components/clients/ClientsMarquee'
import { Seo } from '../components/Seo'

const Home = ({ sponsors }) => {
  return (
    <>
      <Seo
        title="React Query"
        description="Hooks for fetching, caching and updating asynchronous data in React"
      />
      <Head>
        <title>
          React Query - Hooks for fetching, caching and updating asynchronous
          data in React
        </title>
      </Head>
      <div className="bg-gray-50 h-full min-h-full">
        <Banner />
        <Sticky>
          <Nav />
        </Sticky>
        <div className="relative bg-white overflow-hidden">
          <div className="py-24 mx-auto container px-4 sm:mt-12  relative">
            <img
              src={require('images/emblem-light.svg')}
              className="absolute transform right-0 top-1/2 h-0 lg:h-full scale-150 translate-x-1/2 xl:translate-x-1/5 -translate-y-1/2"
              alt="React Query Emblem"
            />
            <div className="grid grid-cols-12 lg:gap-8">
              <div className="col-span-12 lg:col-span-6 ">
                <div className="text-center lg:text-left md:max-w-2xl md:mx-auto ">
                  <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                    Everfund Docs
                  </h1>
                  <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Everything you need to develop with everfund
                  </p>

                  <div className="mt-5  mx-auto sm:flex sm:justify-center lg:justify-start lg:mx-0 md:mt-8">
                    <div className="rounded-md shadow">
                      <Link href="/overview">
                        <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-coral hover:bg-coral-light focus:outline-none focus:border-coral focus:shadow-outline-coral transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                          Get Started
                        </a>
                      </Link>
                    </div>
                    {/* <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                      <a
                        href={siteConfig.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-coral bg-white hover:text-coral-light focus:outline-none focus:border-coral-light focus:shadow-outline-coral transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                      >
                        GitHub
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="bg-gray-900 body-font">
          <div className="py-24 px-4 sm:px-6 lg:px-8  mx-auto container">
            <div className=" sm:text-center pb-16">
              <h3 className="text-3xl mx-auto leading-tight font-extrabold tracking-tight text-white sm:text-4xl  lg:leading-none mt-2">
                One Platform, All the Features.
              </h3>
              <p className="mt-4 text-xl max-w-3xl mx-auto leading-7 text-gray-300">
                With everfund its super easy to do everything
              </p>
            </div>
            <div>
              <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 text-white max-w-screen-lg mx-auto text-lg">
                {[
                  'Single Donations',
                  'Recurring Donations',
                  'GDPR Concent',
                  'Gift Aid',
                  'Cover Processor Fees',
                  'Custom Emails',
                  'Customisable Donation System',
                  'Apple / Google Pay',
                  'Bacs Direct Debits',
                ].map(feature => (
                  <span className="mb-2" key={feature}>
                    <span className="bg-monty-500 text-gray-800 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <Check />
                    </span>
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </section>

        <Footer />
        <style jsx global>{`
          .gradient {
            -webkit-mask-image: linear-gradient(
              180deg,
              transparent 0,
              #000 30px,
              #000 calc(100% - 200px),
              transparent calc(100% - 100px)
            );
          }
        `}</style>
      </div>
    </>
  )
}

export default Home
Home.displayName = 'Home'
const Check = React.memo(() => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="3"
    className="w-3 h-3"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M20 6L9 17l-5-5"></path>
  </svg>
))
