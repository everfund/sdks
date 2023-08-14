import { QuickLink, QuickLinks } from '@/components/QuickLinks'

export const quickLinks = {
  render: QuickLinks,
}

export const quickLink = {
  selfClosing: true,
  render: QuickLink,
  attributes: {
    title: { type: String },
    description: { type: String },
    icon: { type: String },
    href: { type: String },
  },
}
