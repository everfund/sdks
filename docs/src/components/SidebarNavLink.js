import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import cn from "classnames"
export function SidebarNavLink({
  route: { href, pathname, title, selected },
  onClick,
}) {
  const router = useRouter()
  const onlyHashChange = pathname === router.pathname

  return (
    <div
      className={cn("nav-link", {
        selected,
      })}
    >
      {
        // NOTE: use just anchor element for triggering `hashchange` event
        onlyHashChange ? (
          <a className={selected ? "selected" : ""} href={pathname}>
            {title}
          </a>
        ) : (
          <Link href={href} as={pathname}>
            <a>{title}</a>
          </Link>
        )
      }
      <style jsx>{`
        div.selected {
          box-sizing: border-box;
        }
        .nav-link {
          display: flex;
          width: 100%;
        }
        .nav-link :global(a) {
          text-decoration: none;
          font-size: 1rem;
          line-height: 1.5rem;
          color: #4b5563;
          box-sizing: border-box;
          display: inline-block;
          padding: 0.4rem 1rem;
        }
        .selected :global(a) {
          font-weight: 600;
          color: white;
          background: #116452;
        }
        .nav-link:hover :global(a) {
          background: #0c4639;
          color: white !important;
        }
        span {
          color: #a0aec0;
        }
        @media screen and (max-width: 950px) {
          div {
            padding-top: 0;
            padding-left: 0;
            padding-bottom: 0;
          }
          div.selected {
            border-left: none;
            padding-left: 0;
          }
          .nav-link :global(a) {
            display: flex;
            align-items: center;
          }
        }
      `}</style>
    </div>
  )
}
SidebarNavLink.displayName = "SidebarNavLink"
