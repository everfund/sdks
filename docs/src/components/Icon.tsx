import { SVGProps, useId } from 'react'
import clsx from 'clsx'

import { InstallationIcon } from '@/components/icons/InstallationIcon'
import { LightbulbIcon } from '@/components/icons/LightbulbIcon'
import { PluginsIcon } from '@/components/icons/PluginsIcon'
import { PresetsIcon } from '@/components/icons/PresetsIcon'
import { ThemingIcon } from '@/components/icons/ThemingIcon'
import { WarningIcon } from '@/components/icons/WarningIcon'
import { ReactIcon } from '@/components/icons/ReactIcon'
import { JavascriptIcon } from '@/components/icons/JavascriptIcon'
import { GatsbyIcon } from '@/components/icons/GatsbyIcon'
import { NextIcon } from '@/components/icons/NextIcon'
import { WordpressIcon } from '@/components/icons/WordpressIcon'
import { VueIcon } from '@/components/icons/VueIcon'
import { SvelteIcon } from '@/components/icons/SvelteIcon'
import { CDNIcon } from '@/components/icons/CDNIcon'
import { SourceIcon } from '@/components/icons/SourceIcon'
import { GithubIcon } from '@/components/icons/GithubIcon'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const icons: any = {
  installation: InstallationIcon,
  presets: PresetsIcon,
  plugins: PluginsIcon,
  theming: ThemingIcon,
  lightbulb: LightbulbIcon,
  warning: WarningIcon,
  react: ReactIcon,
  javascript: JavascriptIcon,
  gatsby: GatsbyIcon,
  cdn: CDNIcon,
  svelte: SvelteIcon,
  wordpress: WordpressIcon,
  vue: VueIcon,
  next: NextIcon,
  source: SourceIcon,
  github: GithubIcon,
}

interface IIconProps extends SVGProps<SVGSVGElement> {
  icon: string
}

export function Icon({ icon, className, ...props }: IIconProps) {
  const id = useId()
  const IconComponent = icons[icon]

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      fill="none"
      className={clsx(
        className,
        '[--icon-foreground:theme(colors.slate.900)] [--icon-background:theme(colors.gold)]',
      )}
      {...props}
    >
      <IconComponent id={id} />
    </svg>
  )
}

export function LightMode({ className, ...props }: SVGProps<SVGSVGElement>) {
  return <g className={clsx('dark:hidden', className)} {...props} />
}

export function DarkMode({ className, ...props }: SVGProps<SVGSVGElement>) {
  return <g className={clsx('hidden dark:inline', className)} {...props} />
}
