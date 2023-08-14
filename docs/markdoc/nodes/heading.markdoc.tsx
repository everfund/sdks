import { LinkIcon } from '@/components/icons/LinkIcon'
import slugify from '@sindresorhus/slugify'
import clsx from 'clsx'
// import { useRouter } from 'next/router'

// export function Heading({
//   id = '',
//   level = 1,
//   children,
//   className,
// }: {
//   id?: string
//   level?: number
//   children?: JSX.Element
//   className?: string
// }) {
//   const router = useRouter()
//   const Component: any = `h${level}`

//   const isDocs = router.pathname.startsWith('/docs')

//   const link = (
//     <Component className={['heading', className].filter(Boolean).join(' ')}>
//       <div id={id} />
//       {children}
//       <style jsx>
//         {`
//           a {
//             text-decoration: none;
//           }
//           a:hover {
//             opacity: 1;
//           }
//           div {
//             position: absolute;
//             top: calc(-1 * (var(--nav-height) + 44px));
//           }
//         `}
//       </style>
//     </Component>
//   )

//   return isDocs && level !== 1 ? (
//     <a href={`#${id}`}>
//       {link}
//       <style jsx>
//         {`
//           a {
//             text-decoration: none;
//           }
//           a:hover {
//             opacity: 1;
//           }
//           a :global(.heading::after) {
//             opacity: 0;
//             color: var(--toc-border);
//             content: ' #';
//             transition: opacity 250ms ease;
//           }
//           a :global(.heading:hover::after) {
//             opacity: 1;
//           }
//         `}
//       </style>
//     </a>
//   ) : (
//     link
//   )
// }

export const heading = {
  children: ['inline'],
  attributes: {
    id: { type: String },
    level: { type: Number, required: true, default: 1 },
    className: { type: String },
  },

  render: (props: { children: string; level: any }) => {
    const Header = ({
      as: Component = 'div',
      className,
    }: {
      as?: any
      children?: JSX.Element
      className?: string
    }) => {
      return (
        <a
          className="text-inherit transition"
          href={'#' + slugify(props.children)}
        >
          <Component
            id={slugify(props.children)}
            className={clsx(
              'space-x-4 font-quincy !font-semibold text-inherit',
              className,
            )}
          >
            {props.children}{' '}
            <LinkIcon className=" inline h-4 w-auto fill-ever-500" />
          </Component>
        </a>
      )
    }

    switch (props.level) {
      case 1:
        return <Header as="h1" className="!text-3xl" />
      case 2:
        return <Header as="h2" className="!text-3xl" />
      case 3:
        return <Header as="h3" className="!text-2xl" />
      case 4:
        return <Header as="h4" />
      case 5:
        return <Header as="h5" />
      case 6:
        return <Header as="h6" />
    }
  },
}
