import { ReactComponent } from '@/types'
import clsx from 'clsx'

export function Prose({
  as: Component = 'div',
  className,
  ...props
}: ReactComponent<{ as?: any }>) {
  return (
    <Component
      className={clsx(
        className,
        'prose prose-slate max-w-none dark:prose-invert dark:text-slate-400',
        // headings
        'prose-headings:scroll-mt-28 prose-headings:font-quincy prose-headings:text-3xl prose-headings:font-semibold prose-headings:leading-tight lg:prose-headings:scroll-mt-[8.5rem]',
        // lead
        'prose-lead:text-slate-500 dark:prose-lead:text-slate-400',
        // links
        'prose-a:font-semibold prose-a:transition hover:prose-a:text-ever-500',
        // link underline
        'prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.gold))] hover:prose-a:[--tw-prose-underline-size:6px] dark:[--tw-prose-background:theme(colors.slate.900)] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.ever.800))] dark:hover:prose-a:[--tw-prose-underline-size:6px]',
        // pre
        'prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:pt-8 prose-pre:shadow-lg dark:prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10',
        // hr
        'dark:prose-hr:border-slate-800',
        //code
        'prose-code:font-regular prose-code:rounded prose-code:bg-ever-500 prose-code:bg-opacity-20 prose-code:py-0.5 prose-code:px-1 prose-code:text-ever-600',

        //table
        'prose-table:my-0 prose-table:min-w-full prose-table:divide-y prose-table:divide-gray-300',
        'prose-thead:bg-gray-50',
        'prose-th:font-regular prose-th:py-3.5 prose-th:px-3 prose-th:text-left prose-th:font-sans prose-th:text-sm prose-th:text-gray-900 first:prose-th:pl-4 first:prose-th:pr-3 ',
        'prose-td:prose-td:py-4 prose-td:px-3 prose-td:text-sm prose-td:text-gray-500',
      )}
      {...props}
    />
  )
}
