import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

export default nextConfig
