import * as React from "react";
import { ParentSize } from "@visx/responsive";
import Head from "next/head";
import Link from "next/link";
// import bgLines from '../images/line3.svg'
/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline'

import { siteConfig } from "../siteConfig";

import { Banner } from "../components/Banner";
import { Sticky } from "../components/Sticky";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { ClientsMarquee } from "../components/clients/ClientsMarquee";
import { Seo } from "../components/Seo";

const Home = ({ sponsors }) => {

  const features = [
    {
      name: 'Single Donations',
      description: 'You can manage phone, email and chat conversations all from a single mailbox.',
    },
    { name: 'Recurring Donations', description: 'You can manage phone, email and chat conversations all from a single mailbox.' },
    {
      name: 'GDPR Concent',
      description: 'You can manage phone, email and chat conversations all from a single mailbox.',
    },
    { name: 'Cover Processor Fees', description: 'You can manage phone, email and chat conversations all from a single mailbox.' },
    { name: 'Custom Emails', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
    { name: 'Customisable Donation System', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
    { name: 'Apple / Google Pay', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
    { name: 'Bacs Direct Debits', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  ]
  
  return (
    <>
      <Seo
        title="Everfund"
        description="Hooks for fetching, caching and updating asynchronous data in React"
      />
      <Head>
        <title>
          Everfund - Plug and Play donation system
        </title>
      </Head>
      <div className="bg-white h-full min-h-full">
        <Banner />
        <Sticky>
          <Nav />
        </Sticky>
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 ">
            <div className="grid grid-cols-12 lg:gap-8">
              <div className="col-span-12 lg:col-span-6 flex justify-center items-center ">
                <div className="text-center lg:text-left md:max-w-2xl md:mx-auto ">
                  <h1 className="text-4xl pb-6 text-leafy-600 tracking-tight leading-10 font-extrabold sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                    Plug and Play Donation system
                  </h1>
                  <p className="pb-6 text-base text-gray-700 sm:text-xl lg:text-lg xl:text-xl">
                    Get peace of mind with secure, extensible charity donation
                    system that’s built to scale. All with a few lines of code.
                  </p>

                  <div className="space-x-4">
                    <Link href="/overview">
                      <a className="inline-flex items-center px-6 py-2 text-lg font-medium border border-transparent focus:outline-none transition focus:ring-2 focus:ring-offset-2  text-white bg-leafy-600 hover:bg-leafy-700 hover:text-white focus:ring-leafy-500">
                        Get Started
                      </a>
                    </Link>
                      <a href="https://everfund.co.uk" className="inline-flex items-center px-6 py-2 text-lg font-medium border border-transparent focus:outline-none transition focus:ring-2 focus:ring-offset-2  text-white bg-ivy hover:bg-black hover:text-white focus:ring-ivy">
                        Main Website
                      </a>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 flex items-center justify-end">
              <img src="https://shuffle.dev/cronos-assets/images/example-scene.png"/>
              </div>
            </div>
          </div>
        </div>

    <div className="bg-sunny-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <h2 className="px-4 inline-block text-base font-semibold bg-sunny-500 tracking-wide">Everything you need</h2>
          <p className="mt-4 text-3xl font-extrabold text-gray-900">One Platform, All the Features.</p>
          <p className="mt-4 text-lg text-gray-500">
            Dont lose sleep thinking about if you should use Stripe or Go Cardless. Everfund has everything you need to make a donation checkout easy.
          </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>

    <div className="bg-leafy-500 bg-no-repeat bg-cover" style={{
      backgroundImage: "url('./lines-bg.svg')" 
    }}>
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">What are you waiting for? </span>
          <span className="block">Integrate with Everfund.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-white">
          Get a fully customisable donation system intergated into your website in 10 minuets or less. 
        </p>
        <div className="flex justify-center items-center space-x-2">
        <a
          href="#"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium text-black bg-sunny-500 hover:bg-sunny-600 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium text-white bg-ivy hover:bg-black sm:w-auto"
        >
          I want to chat
        </a>
        </div>
      </div>
    </div>

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
  );
};

export default Home;
Home.displayName = "Home";
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
));
