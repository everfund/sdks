import * as React from "react";
import Link from "next/link";
import logoSrc from "../images/logo.svg";
import { siteConfig } from "siteConfig";
import { Search } from "./Search";

export const Nav = () => (
  <>
    <div className="sticky z-50 top-0  text-leafy-800 bg-white bg-opacity-80  backdrop-blur-sm backdrop-saturate-200 backdrop-filter">
      <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-wrap items-center">
          <div className="flex items-center h-16 pt-4 md:pt-0">
            <Link href="/" as="/">
              <a className="flex justify-center items-center">
                <span className="sr-only">Home</span>
                <svg
                  viewBox="0 0 2698.39 585.2"
                  aria-labelledby="Everfund Logo"
                  className="w-auto h-8 sm:h-10"
                >
                  <title>Everfund Logo</title>
                  <path
                    d="M342.87 585.2c-15.25 0-31.68-8.15-51.71-25.64-9.68-8.46-17.65-16.89-20.29-19.74C150.66 426.64 76.88 346.6 38.72 288 2.85 232.89 0 200.58 0 164.06c0-37 18.05-78.13 48.29-110.12C80.66 19.7 123.08 0 164.67 0h.14c124.29 0 200.77 144.46 204 150.61a324.3 324.3 0 0044.79 62.16c34.4 37.23 69.66 56.12 104.74 56.12h1A106 106 0 00593.5 238a103.07 103.07 0 0030.55-73.53A104.57 104.57 0 00519.61 60c-27.55 0-60.14 5.08-93 42.71a30 30 0 11-45.22-39.44C430.85 6.58 483.93 0 519.57 0 610.24 0 684 73.79 684 164.44a162.68 162.68 0 01-48.2 116 165.65 165.65 0 01-115.93 48.4h-1.59c-123.06 0-198.89-143.09-202.78-150.6a324.66 324.66 0 00-44.77-61.77C246.84 90.73 209 60 164.8 60h-.08C139.54 60 113 72.84 91.89 95.16 72.22 116 60 142.37 60 164.06c0 25 0 46.64 29 91.19 35.08 53.89 108.29 132.93 223.8 241.63.6.56 1.17 1.15 1.72 1.76a183.91 183.91 0 0025.4 23.18c10.12-8.28 29.55-25.8 61.73-57.93 29.93-29.88 63.73-65.3 82.2-86.13a30 30 0 0144.9 39.8c-18 20.28-55.35 59.78-92 96-19.27 19-35.44 34.35-48.06 45.47-23.03 20.3-33.31 26.17-45.82 26.17z"
                    fill="currentColor"
                    className="text-leafy-500"
                  ></path>
                  <path
                    fill="currentColor"
                    className="text-[#011410]"
                    d="M2647.26 153h-10.77v-4h25.94v4h-10.77v23.72h-4.4zm20-4h4.4l11.07 22.17L2694 149h4.4v27.72h-4.4v-19.3l-9.26 19.25h-3.64l-9.4-19.25v19.25h-4.4zM1038.53 356.2H865c8.48 29.53 36.13 44.92 70.92 44.92 22.75 0 42.82-5.82 59.77-19.55l27.21 27c-19.18 22.46-52.63 38.26-93.67 38.26-63.78 0-120.88-40.34-120.88-112.3 0-72.79 58-112.31 117.31-112.31 58.9.04 125.81 38.72 112.87 133.98zm-174.4-40.77h121.32c-3.57-30.78-31.22-46.17-59.32-46.17-27.66 0-54.42 14.98-62 46.17zM1037.06 226.42h61.11l64.23 150.16 63.78-150.16h61.56l-97.69 216.29h-55.75zM1514.1 356.2h-173.51c8.47 29.53 36.13 44.92 70.92 44.92 22.75 0 42.82-5.82 59.77-19.55l27.21 27c-19.18 22.46-52.64 38.26-93.67 38.26-63.79 0-120.88-40.34-120.88-112.3 0-72.79 58-112.31 117.31-112.31 58.88.04 125.75 38.72 112.85 133.98zm-174.41-40.77H1461c-3.57-30.78-31.22-46.17-59.33-46.17-27.67 0-54.39 14.98-61.98 46.17zM1691.49 223.92v53.25a92.5 92.5 0 00-15.17-1.25c-45 0-73.15 29.11-73.15 72.37v94.42h-59.77V226.42h59.77v56.15c8-33.27 30.78-60.31 72.71-60.31a66.9 66.9 0 0115.61 1.66zM1794.56 218.52v7.9h59.77v44.51h-59.77v171.78h-59.77V270.93h-29.44v-44.51h29.44v-14.14c0-63.65 47.28-74 78.06-74 12 0 28.55 1.24 41.48 8.32v43.67c-11.15-5-21.85-4.58-25.87-4.58-22.75-.04-33.9 11.61-33.9 32.83zM2096 226.42v216.29h-59.77v-29.53c-12.93 19.14-36.57 33.69-71.37 33.69-47.28 0-87.42-27.45-87.42-93.17V226.42h59.77v118.13c0 31.61 18.29 52.41 49.51 52.41 30.33 0 49.51-20.8 49.51-52.41V226.42zM2356.25 315.43v127.28h-59.77V324.58c0-31.61-18.28-52.41-49.51-52.41-30.77 0-49.51 20.8-49.51 52.41v118.13h-59.77V226.42h59.77V256c12.94-19.13 36.13-33.69 70.92-33.69 47.73-.05 87.87 27.4 87.87 93.12zM2618.75 147.39v295.32H2559V413.6h-1.34c-5.8 12.06-32.56 33.27-74 33.27-54 0-111.52-37.43-111.52-112.3s57.54-112.31 111.52-112.31c41.48 0 68.24 21.21 74 33.27h.89V147.39zm-58.43 187.18c0-40.77-31.23-62.4-64.68-62.4s-64.64 22.05-64.64 62.4 31.19 62.43 64.64 62.43 64.68-21.67 64.68-62.43z"
                  ></path>
                </svg>
                <span className="ml-2 text-xl mt-2 text-sunny-600 font-bold">
                  Developer Docs
                </span>
              </a>
            </Link>
          </div>

          {/* <div className="flex-grow hidden lg:block ml-8">
          <Search />
        </div> */}

          <div className="flex flex-grow items-center justify-between w-3/4 md:w-auto md:justify-end space-x-4 md:space-x-8 h-16">
            <div className="flex space-x-4 md:space-x-8 text-sm md:text-base">
              <div>
                <Link href="/overview">
                  <a className="leading-6 font-medium bg-sunny-500 px-6 py-4">Get Started</a>
                </Link>
              </div>
              <div>
                <Link href="/examples/simple">
                  <a className="leading-6 font-medium bg-ivy text-white px-6 py-4">Demo</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);