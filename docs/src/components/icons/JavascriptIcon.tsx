import { DarkMode, LightMode } from '@/components/Icon'

export const JavascriptIcon = (): JSX.Element => (
  <>
    <LightMode>
      <path
        d="M22.92 26.45c-6.66 4.01-17.25.59-19.83-7.27C-.9 7.05 15.14-3.04 24.02 5.71c3.07 3.19 4.57 7.57 4.09 11.97-.19 2.35-1.06 4.59-2.51 6.44-.76.92-1.67 1.7-2.69 2.32"
        className="fill-[color:var(--icon-background)]"
      />
      <path
        d="M9.09 7.61c-.83 0-1.5.66-1.5 1.48v18.86c0 .81.67 1.48 1.5 1.48h19.13c.83 0 1.5-.66 1.5-1.48V9.09c0-.81-.67-1.48-1.5-1.48H9.09Z"
        fillOpacity={0.5}
        className="fill-white"
      />
      <path
        className="fill-[color:var(--icon-foreground)]"
        d="M19.53 24.76c0 2.13-1.25 3.11-3.08 3.11-1.65 0-2.6-.85-3.09-1.88l1.68-1.01c.32.57.62 1.06 1.33 1.06s1.11-.26 1.11-1.3v-7.01h2.06v7.03h-.01ZM24.4 27.87c-1.91 0-3.15-.91-3.75-2.11l1.68-.97c.44.72 1.02 1.25 2.03 1.25.85 0 1.4-.43 1.4-1.02 0-.7-.56-.95-1.5-1.37l-.51-.22c-1.49-.63-2.47-1.43-2.47-3.11 0-1.55 1.18-2.72 3.02-2.72 1.31 0 2.25.46 2.93 1.65l-1.61 1.03c-.35-.63-.73-.88-1.33-.88s-.98.38-.98.88c0 .62.38.87 1.27 1.25l.51.22c1.75.75 2.74 1.52 2.74 3.24 0 1.85-1.46 2.87-3.41 2.87h-.02Z"
      />
      <path
        className="fill-[color:var(--icon-foreground)]"
        d="M27.18 30.59H9.94a3.35 3.35 0 0 1-3.35-3.35V10c0-1.85 1.5-3.35 3.35-3.35h17.24c1.85 0 3.35 1.5 3.35 3.35v17.24c0 1.85-1.5 3.35-3.35 3.35ZM9.94 8.65c-.74 0-1.35.61-1.35 1.35v17.24c0 .74.61 1.35 1.35 1.35h17.24c.75 0 1.35-.61 1.35-1.35V10c0-.74-.61-1.35-1.35-1.35H9.94Z"
      />
    </LightMode>
    <DarkMode>
      <path
        d="M28.48.11H3.51C1.63.11.1 1.64.1 3.52v24.96c0 1.88 1.53 3.41 3.41 3.41h24.97c1.88 0 3.41-1.53 3.41-3.41V3.52c0-1.88-1.53-3.41-3.41-3.41ZM17.4 24.9c0 3.09-1.82 4.51-4.46 4.51-2.39 0-3.77-1.23-4.48-2.73l2.43-1.47c.47.83.89 1.53 1.92 1.53s1.6-.38 1.6-1.88V14.7h2.99v10.19Zm7.07 4.52c-2.77 0-4.57-1.32-5.44-3.05l2.43-1.4c.64 1.04 1.48 1.82 2.94 1.82 1.23 0 2.03-.62 2.03-1.48 0-1.02-.81-1.38-2.18-1.99l-.74-.32c-2.16-.92-3.58-2.07-3.58-4.5 0-2.24 1.71-3.94 4.37-3.94 1.9 0 3.26.66 4.24 2.39l-2.33 1.49c-.51-.92-1.06-1.28-1.92-1.28s-1.43.55-1.43 1.28c0 .89.55 1.26 1.84 1.82l.74.32c2.54 1.09 3.97 2.2 3.97 4.7 0 2.68-2.11 4.16-4.94 4.16v-.02Z"
        className="fill-[color:var(--icon-background)]"
      />
    </DarkMode>
  </>
)
