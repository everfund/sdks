const withMarkdoc = require('@markdoc/next.js')

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'tsx', 'ts', 'md'],
}

module.exports = withMarkdoc({ mode: 'sever' })(nextConfig)
