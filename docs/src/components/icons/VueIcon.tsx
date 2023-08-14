import { DarkMode, LightMode } from '@/components/Icon'

export const VueIcon = (): JSX.Element => (
  <>
    <LightMode>
      <path
        d="M8.03 26.49c-2.88-1.38-5.13-3.8-6.32-6.76-1.7-4.48-1.25-9.5 1.21-13.61 2.54-4.37 7.63-6.6 12.57-5.5 3.84.87 6.97 3.39 9.75 6.11 1.99 1.95 3.95 4.31 4.07 7.47.03 3.69-1.46 7.24-4.12 9.81a14.778 14.778 0 0 1-11.64 4.05c-1.92-.19-3.8-.72-5.53-1.58"
        className="fill-[color:var(--icon-background)]"
      />
      <path
        className="fill-[color:var(--icon-foreground)]"
        d="M26.06 8.22h-4.39l-3.2 5.12-2.74-5.12H5.67l12.8 21.95L31.28 8.22h-5.21ZM8.87 10.05h3.11l6.49 11.34 6.49-11.34h3.11l-9.6 16.46-9.6-16.46Z"
      />
      <path
        fillOpacity={0.5}
        className="fill-white"
        d="M8.87 10.05h3.11l6.49 11.34 6.5-11.34h3.11l-9.61 16.46-9.6-16.46z"
      />
    </LightMode>
    <DarkMode>
      <path
        d="M25.33 4.21h-5.4L16 10.5l-3.37-6.29H.26L16 31.19 31.74 4.21h-6.41ZM4.2 6.45h3.82L16 20.39l7.98-13.94h3.82L16 26.68 4.2 6.45Z"
        className="fill-[color:var(--icon-background)]"
      />
    </DarkMode>
  </>
)
