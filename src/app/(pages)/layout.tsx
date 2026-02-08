import type { ReactNode } from 'react'

import { PenToolIcon, FrameIcon, PaletteIcon, FramerIcon, PanelTopIcon, TabletSmartphoneIcon } from 'lucide-react'

import Header from '@/components/layout/header'
import Footer from '@/components/blocks/footer/footer'

import type { Navigation } from '@/components/layout/hero-navigation'

const navigationData: Navigation[] = [
  {
    title: 'Portfolio',
    href: '/#portfolio'
  },
  {
    title: 'Services',
    contentClassName: '!w-141 grid-cols-2',
    splitItems: true,
    items: [
      {
        type: 'section',
        title: 'Product & UX Strategy',
        items: [
          {
            title: 'UI/UX Design',
            href: '/#services',
            description: 'Design intuitive digital experiences for web & mobile products.',
            icon: <PaletteIcon className='size-4.5!' />
          },
          {
            title: 'Logo & Brand Identity',
            href: '/#services',
            description: 'Create memorable brand visuals that strengthen recognition.',
            icon: <PenToolIcon className='size-4.5!' />
          },
          {
            title: 'Wireframing & Prototyping',
            href: '/#services',
            description: 'Test ideas fast with interactive prototypes.',
            icon: <FrameIcon className='size-4.5!' />
          }
        ]
      },
      {
        type: 'section',
        title: 'Interface & Delivery',
        items: [
          {
            title: 'Framer Website Development',
            href: '/#services',
            description: 'From Figma to fully-animated no-code websites.',
            icon: <FramerIcon className='size-4.5!' />
          },
          {
            title: 'Landing Page Design',
            href: '/#services',
            description: 'High-impact pages that convert visitors into customers.',
            icon: <PanelTopIcon className='size-4.5!' />
          },
          {
            title: 'Mobile App UI Design',
            href: '/#services',
            description: 'Pixel-perfect app experiences for iOS & Android.',
            icon: <TabletSmartphoneIcon className='size-4.5!' />
          }
        ]
      }
    ]
  },
  {
    title: 'About',
    href: '/#about'
  },
  {
    title: 'Projects',
    href: '/#projects'
  },
  {
    title: 'Testimonials',
    href: '/#testimonials'
  }
]

const PagesLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className='flex flex-col'>
      {/* Header Section */}
      <Header navigationData={navigationData} />

      {/* Main Content */}
      <main className='relative flex flex-col overflow-x-clip *:scroll-mt-15.5'>{children}</main>

      <Footer />
    </div>
  )
}

export default PagesLayout
