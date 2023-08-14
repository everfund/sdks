import Link, { LinkProps } from 'next/link'
import clsx from 'clsx'
import { ButtonHTMLAttributes, HTMLAttributes } from 'react'

const styles = {
  primary:
    'rounded-full bg-ever-500 py-2 px-6 text-sm font-semibold text-white hover:bg-ever-600 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ever-300/50 active:bg-ever-500',
  secondary:
    'rounded-full bg-slate-800 py-2 px-6 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400',
}

type buttonProps =
  | (ButtonHTMLAttributes<HTMLElement> & {
      children?: JSX.Element
      href?: LinkProps['href']
      variant?: 'primary' | 'secondary'
    })
  | (LinkProps &
      HTMLAttributes<HTMLElement> & {
        variant?: 'primary' | 'secondary'
      })

export function Button({
  variant = 'primary',
  className,
  href,
  ...props
}: buttonProps) {
  className = clsx(styles[variant], className)

  return href ? (
    <Link href={href}>
      <a className={className} {...props} />
    </Link>
  ) : (
    <button className={className} {...props} />
  )
}
