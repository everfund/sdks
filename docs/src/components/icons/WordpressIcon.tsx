import { DarkMode, LightMode } from '@/components/Icon'

export const WordpressIcon = (): JSX.Element => (
  <>
    <LightMode>
      <path
        d="M21.05 25.41C14.39 29.42 3.8 26 1.22 18.14-2.76 6.02 13.28-4.07 22.16 4.68c3.07 3.19 4.57 7.57 4.09 11.97-.19 2.35-1.06 4.59-2.51 6.44-.76.92-1.67 1.7-2.69 2.32"
        className="fill-[color:var(--icon-background)]"
      />
      <circle
        cx={19.01}
        cy={18.68}
        r={12.06}
        fillOpacity={0.5}
        className="fill-white"
      />
      <path
        className="fill-[color:var(--icon-foreground)]"
        d="m19.2 19.64-2.06 6.01-1.6 4.59.33.09h.02c.99.26 2.04.41 3.11.41.53 0 1.06-.03 1.56-.11.7-.09 1.38-.24 2.04-.45.16-.05.33-.11.49-.16-.18-.38-.55-1.21-.57-1.25l-3.32-9.13ZM8 13.94c-.63 1.42-1.06 3.17-1.06 4.74 0 .4.02.79.06 1.18.43 4.47 3.32 8.23 7.29 9.92.16.07.33.14.5.2L8.95 13.94c-.5-.02-.6.01-.96 0Z"
      />
      <path
        className="fill-[color:var(--icon-foreground)]"
        d="M29.95 13.62a11.971 11.971 0 0 0-1.27-2.12 12.128 12.128 0 0 0-5.33-4.06A11.81 11.81 0 0 0 19 6.62c-3.79 0-7.18 1.76-9.39 4.5-.41.5-.77 1.04-1.1 1.61h2.12c1.14 0 2.89-.14 2.89-.14.59-.04.65.82.07.89 0 0-.59.07-1.24.1l3.95 11.75 2.37-7.12-1.68-4.62c-.59-.03-1.14-.1-1.14-.1-.59-.03-.52-.93.06-.89 0 0 1.79.14 2.86.14 1.14 0 2.89-.14 2.89-.14.58-.04.66.82.07.89 0 0-.58.07-1.24.1l3.91 11.66 1.09-3.62c.55-1.41.82-2.57.82-3.5 0-1.34-.48-2.27-.9-2.99-.55-.9-1.06-1.65-1.06-2.54 0-1 .75-1.93 1.82-1.93h.14c1.65-.04 2.19 1.59 2.26 2.7v.04c.03.45 0 .79 0 1.18 0 1.09-.21 2.33-.82 3.88l-2.45 7.09-1.4 4.13c.11-.05.22-.1.33-.16 3.56-1.72 6.16-5.15 6.7-9.22.08-.53.12-1.08.12-1.63 0-1.82-.4-3.54-1.12-5.08Z"
      />
    </LightMode>
    <DarkMode>
      <path
        className="fill-[color:var(--icon-background)]"
        d="m16.03 17.29-2.68 7.81-2.07 5.96c.15.04.29.07.43.11h.02c1.29.34 2.64.53 4.04.53.69 0 1.37-.04 2.03-.15.91-.11 1.79-.31 2.65-.58.21-.07.42-.14.64-.21-.23-.49-.72-1.57-.74-1.62l-4.32-11.85ZM1.5 9.89C.68 11.73.13 14 .13 16.04c0 .51.02 1.03.07 1.53.56 5.81 4.32 10.69 9.47 12.88.21.09.43.18.65.26L2.74 9.89c-.65-.02-.77.02-1.24 0Z"
      />
      <path
        className="fill-[color:var(--icon-background)]"
        d="M30 9.47c-.35-.76-.77-1.48-1.23-2.17-.13-.2-.28-.39-.42-.59a15.71 15.71 0 0 0-6.93-5.27C19.67.75 17.77.38 15.78.38c-4.92 0-9.31 2.29-12.19 5.85-.53.65-1 1.35-1.43 2.09h2.76c1.48 0 3.75-.18 3.75-.18.77-.05.85 1.07.09 1.16 0 0-.77.09-1.62.13l5.13 15.25 3.08-9.24-2.19-6c-.77-.04-1.48-.13-1.48-.13-.77-.04-.67-1.21.08-1.16 0 0 2.32.18 3.71.18 1.48 0 3.75-.18 3.75-.18.76-.05.86 1.07.09 1.16 0 0-.76.09-1.61.13l5.08 15.14 1.41-4.7c.71-1.83 1.07-3.34 1.07-4.54 0-1.74-.63-2.94-1.17-3.88-.71-1.17-1.38-2.15-1.38-3.3 0-1.3.98-2.5 2.37-2.5h.18c2.14-.06 2.84 2.06 2.93 3.51v.05c.03.59 0 1.02 0 1.53 0 1.42-.27 3.03-1.07 5.04l-3.18 9.2-1.82 5.36c.15-.07.29-.13.43-.2 4.63-2.24 7.99-6.69 8.7-11.97.11-.69.15-1.4.15-2.12 0-2.36-.52-4.59-1.45-6.59Z"
      />
    </DarkMode>
  </>
)
