import * as React from "react"
import NextLink from "next/link"
import { removeFromLast } from "../lib/docs/utils"
import { siteConfig } from "siteConfig"
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi"
import { TWButton } from "./TWButton"

function areEqual(prevProps, props) {
  return prevProps.route?.path === props.route?.path
}

export const DocsPageFooter = React.memo(({ route, prevRoute, nextRoute }) => {
  const editUrl =
    route?.editUrl || route?.path
      ? `${siteConfig.editUrl}${route?.editUrl || route?.path}`
      : null

  return (
    <>
      <div className="py-8">
        <div className="space-between flex items-center">
          {prevRoute && prevRoute.path ? (
            <NextLink href={removeFromLast(prevRoute.path, ".")}>
              <a className="block flex-grow">
                <span className="block mb-1 text-gray-500 text-sm font-semibold">
                  ← Prev
                </span>
                <span className="text-leafy-500 block text-xl font-semibold">
                  {prevRoute.title}
                </span>
              </a>
            </NextLink>
          ) : (
            <div />
          )}
          {nextRoute && nextRoute.path && (
            <NextLink href={removeFromLast(nextRoute.path, ".")}>
              <a className="block flex-grow text-right">
                <span className="block mb-1 text-gray-500 text-sm font-semibold">
                  Next →
                </span>
                <span className="text-leafy-500 block text-xl font-semibold">
                  {nextRoute.title}
                </span>
              </a>
            </NextLink>
          )}
        </div>
      </div>

      {editUrl ? (
        <div className="mb-8">
          <a
            href={editUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 underline"
          >
            Edit this page on GitHub
          </a>
        </div>
      ) : null}

      {/* <div className="py-8 md:flex md:items-center md:py-8 border-t border-b">
        <div className="font-semibold text-xl mr-4 text-center mb-4 md:mb-0  md:text-left">
          Was this page helpful?
        </div>
        <div className="grid grid-cols-2 gap-3 w-auto max-w-xs mx-auto md:mx-2">
          <TWButton icon={<FiThumbsUp />}>Yes</TWButton>
          <TWButton icon={<FiThumbsDown />}>No</TWButton>
        </div>
      </div> */}
    </>
  )
}, areEqual)
DocsPageFooter.displayName = "DocsPageFooter"
