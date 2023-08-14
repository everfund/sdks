import { ClassAttributes, TableHTMLAttributes, ThHTMLAttributes } from 'react'

export const th = {
  attributes: {
    scope: {
      type: String,
      default: 'col',
    },
  },
  render: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLTableHeaderCellElement> &
      ThHTMLAttributes<HTMLTableHeaderCellElement>,
  ) => <th {...props} />,
}

export const table = {
  render: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLTableElement> &
      TableHTMLAttributes<HTMLTableElement>,
  ) => (
    <div className="-my-2 -mx-4 mb-8 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table {...props} />
        </div>
      </div>
    </div>
  ),
}
