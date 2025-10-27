import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('http://localhost:1337/**'),
      new URL('https://cheerful-horses-ceee4d2a36.media.strapiapp.com/**')
    ]
  }
}

export default nextConfig
