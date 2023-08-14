import { Callout } from '@/components/Callout'

export const figure = {
  selfClosing: true,
  attributes: {
    src: { type: String },
    alt: { type: String },
    caption: { type: String },
  },
  render: ({
    src,
    alt = '',
    caption,
  }: {
    alt?: string
    src: string
    caption?: string
  }) => (
    <figure>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  ),
}
