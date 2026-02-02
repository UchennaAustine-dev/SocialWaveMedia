import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Social Wave Media',
    short_name: 'SocialWave',
    description: 'Premium Digital Marketing & Growth Agency',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0f',
    theme_color: '#2dfcbf',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
