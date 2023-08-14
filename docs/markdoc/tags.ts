import { embededCode } from './tags/code-sandbox.markdoc'
import { quickLink, quickLinks } from './tags/quick-links.markdoc'
import { frameworkLink, frameworkLinks } from './tags/framework-links.markdoc'
import { figure } from './tags/figure.markdoc'
import { callout } from './tags/callout.markdoc'
const tags = {
  callout: callout,
  figure: figure,
  'framework-links': frameworkLinks,
  'framework-link': frameworkLink,
  'quick-links': quickLinks,
  'quick-link': quickLink,
  embededCode: embededCode,
}

export default tags
