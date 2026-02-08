import HeroSection from '@/components/blocks/hero-section/hero-section'
import Portfolio from '@/components/blocks/portfolio/portfolio'
import Services from '@/components/blocks/services/services'
import AboutMe from '@/components/blocks/about-me/about-me'
import Projects from '@/components/blocks/projects/projects'

import Testimonials from '@/components/blocks/testimonials/testimonials'

import { uiImages, framerImages, skills } from '@/assets/data/services'
import { aboutData } from '@/assets/data/about-me'
import { reviews } from '@/assets/data/testimonials'


// Hero Avatar
const avatars = [
  {
    src: '/images/avatar/avatar-3.webp',
    fallback: 'OS',
    name: 'Olivia Sparks'
  },
  {
    src: '/images/avatar/avatar-6.webp',
    fallback: 'HL',
    name: 'Howard Lloyd'
  },
  {
    src: '/images/avatar/avatar-5.webp',
    fallback: 'HR',
    name: 'Hallie Richards'
  },
  {
    src: '/images/avatar/avatar-16.webp',
    fallback: 'JW',
    name: 'Jenny Wilson'
  }
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${process.env.NEXT_PUBLIC_APP_URL}#website`,
      name: 'Craft - AI-Powered Product Agency',
      description:
        'Craft is an end-to-end AI agency that handles UX design, front-end, back-end, data pipelines, product strategy, and design strategy.',
      url: `${process.env.NEXT_PUBLIC_APP_URL}`,
      inLanguage: 'en-US'
    }
  ]
}

const Home = () => {
  return (
    <>
      <HeroSection avatars={avatars} />
      <Portfolio />
      <Services uiImages={uiImages} framerImages={framerImages} skills={skills} />
      <AboutMe {...aboutData} />

      <Projects />
      <Testimonials reviews={reviews} />

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')
        }}
      />
    </>
  )
}

export default Home
