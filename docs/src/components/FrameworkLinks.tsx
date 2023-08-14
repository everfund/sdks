import Link, { LinkProps } from 'next/link'

import { Icon } from '@/components/Icon'
import { HTMLAttributes } from 'react'

export function FrameworkLinks({
  children,
}: HTMLAttributes<HTMLElement> & {
  children?: JSX.Element
}) {
  return (
    <div className="not-prose my-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
      {children}
    </div>
  )
}

export function FrameworkLink({
  title,
  href,
  icon,
}: {
  href: LinkProps['href']
  icon: string
  title: string
}) {
  return (
    <div className="group relative rounded-xl border border-slate-200 dark:border-slate-800">
      <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 transition [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,theme(colors.ever.400)] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
      <div className="relative flex flex-row items-center space-x-4 overflow-hidden rounded-xl p-6">
        <Icon icon={icon} className="h-8 w-8" />
        <h2 className="font-display text-base text-slate-900 dark:text-white">
          <Link href={href}>
            <a>
              <span className="absolute -inset-px rounded-xl" />
              {title}
            </a>
          </Link>
        </h2>
      </div>
    </div>
  )
}
