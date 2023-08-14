import { Callout } from '@/components/Callout'

export const callout = {
  attributes: {
    title: { type: String },
    type: {
      type: String,
      default: 'note',
      matches: ['note', 'warning'],
      errorLevel: 'critical',
    },
  },
  render: Callout,
}
