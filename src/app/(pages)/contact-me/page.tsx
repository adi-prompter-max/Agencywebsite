import type { Metadata } from 'next'

import ContactMe from '@/components/blocks/contact-me/contact-me'

// JSON-LD structured data for SEO
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
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${process.env.NEXT_PUBLIC_APP_URL}#webpage`,
      name: 'Contact Us',
      description: "Get in touch with our team. We're here to help you build your next product.",
      url: `${process.env.NEXT_PUBLIC_APP_URL}/contact`,
      isPartOf: {
        '@id': `${process.env.NEXT_PUBLIC_APP_URL}#website`
      },
      potentialAction: {
        '@type': 'ReadAction',
        target: [`${process.env.NEXT_PUBLIC_APP_URL}/contact`]
      }
    }
  ]
}

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Start a project with us. Whether you need end-to-end product development, AI integration, or design strategy, our team is ready to help bring your vision to life.",
  keywords: [
    'contact',
    'AI agency',
    'product development',
    'hire developers',
    'hire designers',
    'AI integration',
    'project inquiry',
    'get in touch',
    'full-stack development',
    'data pipelines',
    'product strategy'
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/contact`
  }
}

const contactInfo = {
  name: 'Craft Agency',
  role: 'AI-Powered Product Studio',
  image: '/images/profile/GautamChauhan.jpeg',
  availability: 'Accepting Projects',
  social: {
    instagram: 'https://www.instagram.com/',
    dribbble: '#',
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/'
  },
  companies: [
    {
      name: 'University of Mississippi',
      logo: '/images/brand-logo/um-logo.webp'
    },
    {
      name: 'Star Health',
      logo: '/images/brand-logo/star-helth-logo.webp'
    },
    {
      name: 'Sense Arena',
      logo: '/images/brand-logo/sense-arena-logo.webp'
    },
    {
      name: 'Shemaroo',
      logo: '/images/brand-logo/shemaroo-logo.webp'
    },
    {
      name: 'Mercedes Benz',
      logo: '/images/brand-logo/mercedes-benz-logo.webp'
    }
  ]
}

const ContactMePage = () => {
  return (
    <>
      <ContactMe contactInfo={contactInfo} />
      {/* Add JSON-LD to your page */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')
        }}
      />
    </>
  )
}

export default ContactMePage
