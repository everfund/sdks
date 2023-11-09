'use client' ;

import { useRouter } from 'next/router'
import { Button } from './Button'

type Options = { [key: string]: string } 

const SDKs: Options = { react: 'React', js: 'JavaScript' }

export function Selector(type: 'sdk' | 'pm') {
  const router = useRouter()
  const selected = router.query.sdk

  return (
    <div className="flex flex-row gap-2 ">
      {Object.keys(SDKs).map((key) => (
        <Button
          key={key}
          href={`?sdk=${key}`}
          variant="secondary"
          className={key === selected ? '!text-ever-300 bg-slate-' : ''}
        >
          {SDKs[key]}
        </Button>
      ))}
    </div>
  )
}