import { FrameworkLinks, FrameworkLink } from '@/components/FrameworkLinks'
export const frameworkLinks = {
  render: FrameworkLinks,
  attributes: {
    title: { type: String },
  },
}

export const frameworkLink = {
  selfClosing: true,
  render: FrameworkLink,
  attributes: {
    title: { type: String },
    icon: { type: String },
    href: { type: String },
  },
}
