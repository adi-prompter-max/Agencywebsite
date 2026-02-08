import type { ReviewCard } from '@/components/blocks/testimonials/review-stack'

export const reviews: ReviewCard[] = [
  {
    id: '1',
    avatar: '/images/avatar/avatar-1.webp',
    fallback: 'MC',
    name: 'Marley Calzoni',
    designation: 'CTO',
    company: 'emote Care',
    rating: 4.5,
    message:
      'They handled everything from our design system to the data pipeline. Having one team own the entire stack made our launch 3x faster than expected.'
  },
  {
    id: '2',
    avatar: '/images/avatar/avatar-3.webp',
    fallback: 'TS',
    name: 'Tony Stark',
    designation: 'CEO & Co Founder',
    company: 'Neoteric',
    rating: 5,
    message:
      'The AI integration they built transformed our product. Their team understood both the technical and strategic sides, which is incredibly rare to find in one agency.'
  },
  {
    id: '3',
    avatar: '/images/avatar/avatar-5.webp',
    fallback: 'BW',
    name: 'Bruce Wayne',
    designation: 'VP of Product',
    company: 'Kundra',
    rating: 3.5,
    message:
      'From UX research to backend architecture, they delivered a complete platform overhaul. The end-to-end approach eliminated the coordination overhead we had with multiple vendors.'
  }
]
