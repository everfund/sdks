import { HTMLAttributes } from 'react'

export type ReactComponent<p> = HTMLAttributes<HTMLElement> & {
  children?: JSX.Element
} & p
