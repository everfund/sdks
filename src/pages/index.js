import * as React from "react";
import Head from "next/head";
import Link from "next/link";
// import bgLines from '../images/line3.svg'
/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from "@heroicons/react/outline";
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
      name: "Single Donations",
      description:
        "You can manage phone, email and chat conversations all from a single mailbox.",
    },
    {
      name: "Recurring Donations",
      description:
        "You can manage phone, email and chat conversations all from a single mailbox.",
    },
    {
      name: "GDPR Concent",
      description:
        "You can manage phone, email and chat conversations all from a single mailbox.",
    },
    {
      name: "Cover Processor Fees",
      description:
        "You can manage phone, email and chat conversations all from a single mailbox.",
    },
    {
      name: "Custom Emails",
      description:
        "Find what you need with advanced filters, bulk actions, and quick views.",
    },
    {
      name: "Customisable Donation System",
      description:
        "Find what you need with advanced filters, bulk actions, and quick views.",
    },
    {
      name: "Apple / Google Pay",
      description:
        "Find what you need with advanced filters, bulk actions, and quick views.",
    },
    {
      name: "Bacs Direct Debits",
      description:
        "Find what you need with advanced filters, bulk actions, and quick views.",
    },
  ];

  return (
    <>
      <Seo
        title="Everfund"
        description="Hooks for fetching, caching and updating asynchronous data in React"
      />
      <Head>
        <title>Everfund - Plug and Play donation system</title>
      </Head>
      <div className="h-full min-h-full bg-white">
        <Banner />
        <Sticky>
          <Nav />
        </Sticky>
        <div className="relative overflow-hidden">
          <div className="mx-auto px-4 py-16 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div className="grid grid-cols-12 lg:gap-8">
              <div className="flex col-span-12 items-center justify-center lg:col-span-6">
                <div className="text-center md:mx-auto md:max-w-2xl lg:text-left">
                  <h1 className="pb-6 text-leafy-600 text-4xl font-extrabold tracking-tight leading-10 sm:text-6xl sm:leading-none lg:text-5xl xl:text-6xl">
                    Plug and Play Donation system
                  </h1>
                  <p className="pb-6 text-gray-700 text-base sm:text-xl lg:text-lg xl:text-xl">
                    Get peace of mind with secure, extensible charity donation
                    system that’s built to scale. All with a few lines of code.
                  </p>

                  <div className="space-x-4">
                    <Link href="/overview">
                      <a className="inline-flex items-center px-6 py-2 text-white hover:text-white text-lg font-medium bg-leafy-600 hover:bg-leafy-700 border border-transparent focus:outline-none transition focus:ring-2 focus:ring-leafy-500 focus:ring-offset-2">
                        Get Started
                      </a>
                    </Link>
                    <a
                      href="https://everfund.co.uk"
                      className="inline-flex items-center px-6 py-2 text-white hover:text-white text-lg font-medium hover:bg-black bg-ivy border border-transparent focus:outline-none transition focus:ring-2 focus:ring-ivy focus:ring-offset-2"
                    >
                      Main Website
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end lg:col-span-6">
                <img src="https://ik.imagekit.io/everfund/hero-banner_90F0rvEH6.png" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-sunny-100">
          <div className="mx-auto px-4 py-16 max-w-7xl sm:px-6 lg:grid lg:gap-x-8 lg:grid-cols-3 lg:px-8 lg:py-24">
            <div>
              <h2 className="inline-block px-4 text-base font-semibold tracking-wide bg-sunny-500">
                Everything you need
              </h2>
              <p className="mt-4 text-gray-900 text-3xl font-extrabold">
                One Platform, All the Features.
              </p>
              <p className="mt-4 text-gray-500 text-lg">
                Dont lose sleep thinking about if you should use Stripe or Go
                Cardless. Everfund has everything you need to make a donation
                checkout easy.
              </p>
            </div>
            <div className="mt-12 lg:col-span-2 lg:mt-0">
              <dl className="space-y-10 sm:grid sm:gap-x-6 sm:gap-y-10 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:space-y-0 lg:gap-x-8">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <CheckIcon
                        className="absolute w-6 h-6 text-green-500"
                        aria-hidden="true"
                      />
                      <p className="ml-9 text-gray-900 text-lg font-medium leading-6">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="ml-9 mt-2 text-gray-500 text-base">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div
          className="bg-leafy-500 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('./lines-bg.svg')",
          }}
        >
          <div className="mx-auto px-4 py-16 max-w-2xl text-center sm:px-6 sm:py-20 lg:px-8">
            <h2 className="text-white text-3xl font-extrabold sm:text-4xl">
              <span className="block">What are you waiting for? </span>
              <span className="block">Integrate with Everfund.</span>
            </h2>
            <p className="mt-4 text-white text-lg leading-6">
              Get a fully customisable donation system intergated into your
              website in 10 minuets or less.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <Link href="/overview">
                <a className="inline-flex items-center justify-center mt-8 px-5 py-3 w-full text-black text-base font-medium bg-sunny-500 hover:bg-sunny-600 border border-transparent sm:w-auto">
                  Get Started
                </a>
              </Link>

              <button
                onClick={() => $crisp.push(["do", "chat:open"])}
                className="inline-flex items-center justify-center mt-8 px-5 py-3 w-full text-white text-base font-medium hover:bg-black bg-ivy border border-transparent sm:w-auto"
              >
                Need Support?
              </button>
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
