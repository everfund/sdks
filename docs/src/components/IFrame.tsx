export function CodeSpaceIframe({
  title,
  src,
}: {
  title: string
  src: string
}) {
  return (
    <iframe
      src={src + `&embed=1&hideExplorer=1&view=preview`}
      title={title}
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      style={{
        width: '100%',
        height: '40rem',
        border: '0',
        borderRadius: 8,
        overflow: 'hidden',
        position: 'static',
        zIndex: 0,
      }}
    />
  )
}
