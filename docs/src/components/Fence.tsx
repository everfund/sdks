import { Fragment } from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import clsx from 'clsx'

export function Fence({
  children,
  language,
}: {
  language: Language
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any
  copy: boolean
}) {
  return (
    <Highlight
      {...defaultProps}
      code={children.trimEnd()}
      language={language}
      theme={undefined}
    >
      {({ className, style, tokens, getTokenProps }) => (
        <div className="relative">
          <button
            className="focus:ring-off set-2 absolute right-0  top-0 z-10 m-2 inline-flex items-center rounded-md border border-transparent bg-slate-500/50 px-2 py-1 text-sm font-medium leading-4 text-white shadow-sm transition hover:bg-ever-500 focus:outline-none focus:ring-2 focus:ring-ever-500"
            onClick={() => {
              navigator && navigator.clipboard.writeText(children.trimEnd())
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="-ml-0.5 mr-1 h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
            </svg>
            Copy
          </button>
          <pre className={clsx(className, 'relative')} style={style}>
            <code className="!rounded-none !bg-transparent !px-0 !py-0 !text-inherit">
              {tokens.map((line, lineIndex) => (
                <Fragment key={lineIndex}>
                  {line
                    .filter((token) => !token.empty)
                    .map((token, tokenIndex) => (
                      <span key={tokenIndex} {...getTokenProps({ token })} />
                    ))}
                  {'\n'}
                </Fragment>
              ))}
            </code>
          </pre>
        </div>
      )}
    </Highlight>
  )
}
