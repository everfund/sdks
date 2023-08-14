import { fence } from './nodes/fence.markdoc'
import { heading } from './nodes/heading.markdoc'
import { table, th } from './nodes/table.markdoc'

const nodes = {
  document: {
    render: undefined,
  },
  th: th,
  table: table,
  heading: heading,
  fence: fence,
}

export default nodes
