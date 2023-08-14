import { CodeSpaceIframe } from '@/components/IFrame'

export const embededCode = {
  selfClosing: true,
  render: CodeSpaceIframe,
  attributes: {
    title: { type: String },
    src: { type: String },
  },
}
