import { DarkMode, LightMode } from '@/components/Icon'

export const InstallationIcon = (): JSX.Element => (
  <>
    <LightMode>
      <circle cx={12} cy={12} r={12} />
      <path
        d="m8 8 9 21 2-10 10-2L8 8Z"
        fillOpacity={0.5}
        className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </LightMode>
    <DarkMode>
      <path
        d="m4 4 10.286 24 2.285-11.429L28 14.286 4 4Z"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </DarkMode>
  </>
)
