import { useRouter } from "next/router"

type IfProps = {
  children?: JSX.Element
  sdk: string
}

export function If({ sdk, children }: IfProps) {
  const router = useRouter()
  const selected = router.query.sdk ?? 'react'

  return selected === sdk ? children : null
}