'use client'

import { useRef, useState, useEffect } from 'react'

import { EyeIcon } from 'lucide-react'

import Link from 'next/link'

import { useScroll, motion, useTransform } from 'motion/react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { MotionPreset } from '@/components/ui/motion-preset'

import { cn } from '@/lib/utils'

// Custom hook to track window size
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1280,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Call once initially to set the size

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

// Helper function to calculate responsive animation values
function getAnimationValues(width: number) {
  if (width >= 1280) {
    // Desktop (xl) - full values
    return {
      div1TranslateY: '-880px',
      div1TranslateX: '520px',
      div2TranslateY: '-900px',
      div2TranslateX: '-30px',
      div3TranslateY: '-1440px',
      div3TranslateX: '520px',
      div4TranslateY: '-1460px',
      div4TranslateX: '-25px',
      textTranslateY: '-180px',
      textOpacity: 0,
      textScale: 0.75,
      divScale: 0.75
    }
  } else if (width >= 1024) {
    // Tablet (md) - 55% values
    return {
      div1TranslateY: '-850px',
      div1TranslateX: '500px',
      div2TranslateY: '-860px',
      div2TranslateX: '-10px',
      div3TranslateY: '-1400px',
      div3TranslateX: '500px',
      div4TranslateY: '-1420px',
      div4TranslateX: '-10px',
      textTranslateY: '-180px',
      textOpacity: 0,
      textScale: 0.75,
      divScale: 0.75
    }
  } else if (width >= 945) {
    // Desktop (lg) - 75% values
    return {
      div1TranslateY: '-800px',
      div1TranslateX: '470px',
      div2TranslateY: '-820px',
      div2TranslateX: '-10px',
      div3TranslateY: '-1300px',
      div3TranslateX: '470px',
      div4TranslateY: '-1330px',
      div4TranslateX: '-10px',
      textTranslateY: '-180px',
      textOpacity: 0,
      textScale: 0.75,
      divScale: 0.75
    }
  } else if (width >= 884) {
    // Tablet (md) - 55% values
    return {
      div1TranslateY: '-830px',
      div1TranslateX: '430px',
      div2TranslateY: '-840px',
      div2TranslateX: '-10px',
      div3TranslateY: '-1310px',
      div3TranslateX: '430px',
      div4TranslateY: '-1330px',
      div4TranslateX: '-10px',
      textTranslateY: '-180px',
      textOpacity: 0,
      textScale: 0.75,
      divScale: 0.75
    }
  } else if (width >= 768) {
    // Tablet (md) - 55% values
    return {
      div1TranslateY: '-800px',
      div1TranslateX: '370px',
      div2TranslateY: '-820px',
      div2TranslateX: '-20px',
      div3TranslateY: '-1250px',
      div3TranslateX: '370px',
      div4TranslateY: '-1270px',
      div4TranslateX: '-25px',
      textTranslateY: '-180px',
      textOpacity: 0,
      textScale: 0.75,
      divScale: 0.75
    }
  } else {
    // Mobile - no animation
    return {
      div1TranslateY: '0px',
      div1TranslateX: '0px',
      div2TranslateY: '0px',
      div2TranslateX: '0px',
      div3TranslateY: '0px',
      div3TranslateX: '0px',
      div4TranslateY: '0px',
      div4TranslateX: '0px',
      textTranslateY: '0px',
      textOpacity: 1,
      textScale: 1,
      divScale: 1
    }
  }
}

const Portfolio = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const size = useWindowSize()
  const isMobile = size.width < 768

  // Get responsive animation values based on window width
  const animValues = getAnimationValues(size.width)

  // Determine scroll offset based on screen width
  const scrollOffset: ['start end' | 'center end', 'center start'] =
    size.width < 2000 ? ['start end', 'center start'] : ['center end', 'center start']

  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: scrollOffset
  })

  // Pass responsive values to useTransform
  const div1TranslateY = useTransform(scrollYProgress, [0, 0.5], [animValues.div1TranslateY, '0px'])
  const div1TranslateX = useTransform(scrollYProgress, [0, 0.5], [animValues.div1TranslateX, '0px'])

  const div2TranslateY = useTransform(scrollYProgress, [0, 0.5], [animValues.div2TranslateY, '0px'])
  const div2TranslateX = useTransform(scrollYProgress, [0, 0.5], [animValues.div2TranslateX, '0px'])
  const div2Rotate = useTransform(scrollYProgress, [0, 0.5], [12, 0])

  const div3TranslateY = useTransform(scrollYProgress, [0, 0.5], [animValues.div3TranslateY, '0px'])
  const div3TranslateX = useTransform(scrollYProgress, [0, 0.5], [animValues.div3TranslateX, '0px'])
  const div3Rotate = useTransform(scrollYProgress, [0, 0.5], [-2, 0])

  const div4TranslateY = useTransform(scrollYProgress, [0, 0.5], [animValues.div4TranslateY, '0px'])
  const div4TranslateX = useTransform(scrollYProgress, [0, 0.5], [animValues.div4TranslateX, '0px'])
  const div4Rotate = useTransform(scrollYProgress, [0, 0.5], [8, 0])

  const scale = useTransform(scrollYProgress, [0, 0.5], [animValues.divScale, 1])

  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [animValues.textOpacity, 1])
  const textTranslateY = useTransform(scrollYProgress, [0, 0.5], [animValues.textTranslateY, '0px'])
  const textScale = useTransform(scrollYProgress, [0, 0.5], [animValues.textScale, 1])

  return (
    <section id='portfolio' className='relative flex-1'>
      <MotionPreset
        fade
        blur
        transition={{ duration: 0.5 }}
        delay={0.15}
        className='mx-auto flex w-full max-w-6xl flex-col min-[1147px]:border-x'
      >
        {/* Header */}
        <div className='space-y-2.5 px-4 py-16 md:px-6 lg:px-8'>
          <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.5 }}>
            <Badge variant='outline' className='rounded-none'>
              Portfolio
            </Badge>
          </MotionPreset>

          <div className='flex justify-between gap-4 max-md:flex-col'>
            <h2 className='max-w-100 text-2xl font-semibold sm:text-3xl lg:text-4xl'>
              <MotionPreset
                fade
                blur
                slide={{ direction: 'down', offset: 50 }}
                delay={0.3}
                transition={{ duration: 0.5 }}
              >
                Featured client
              </MotionPreset>
              <MotionPreset
                fade
                blur
                slide={{ direction: 'down', offset: 50 }}
                delay={0.45}
                transition={{ duration: 0.5 }}
              >
                work ⚡
              </MotionPreset>
            </h2>

            <MotionPreset
              delay={0.3}
              fade
              blur
              slide={{ direction: 'down', offset: 50 }}
              transition={{ duration: 0.5 }}
            >
              <p className='text-muted-foreground max-w-xl text-lg'>
                A selection of projects showcasing our end-to-end capabilities. From strategy to
                deployment, each solution is built for impact and scale.
              </p>
            </MotionPreset>
          </div>
        </div>

        <MotionPreset delay={0.75} fade blur transition={{ duration: 0.5 }}>
          <Separator />
        </MotionPreset>

        <div
          ref={containerRef}
          className='relative grid gap-x-12.5 gap-y-16 px-4 py-16 max-sm:gap-y-8 sm:grid-cols-2 md:px-6 lg:px-8'
        >
          <motion.div
            style={{ translateY: div1TranslateY, translateX: div1TranslateX, scale: scale }}
            transition={{ ease: 'easeInOut', duration: 0.6 }}
            className={cn(
              'group relative flex flex-col gap-6 **:transition-all **:duration-300',
              !isMobile && 'z-4 will-change-scroll perspective-distant transform-3d'
            )}
          >
            <div className='lg:h-93.5'>
              <div className={cn('overflow-hidden rounded-[12px] border shadow-sm group-hover:rotate-3')}>
                <img
                  src='/images/portfolio/image-01.webp'
                  alt="Lay's wafer project"
                  className='w-full rounded-[12px] lg:h-93.5 lg:object-center dark:hidden'
                />
                <img
                  src='/images/portfolio/image-01-dark.webp'
                  alt="Lay's wafer project"
                  className='hidden w-full rounded-[12px] lg:h-93.5 lg:object-center dark:block'
                />
              </div>
            </div>

            <motion.div
              style={{ opacity: textOpacity, translateY: textTranslateY, scale: textScale }}
              transition={{ type: 'spring', stiffness: 100, damping: 30, mass: 1 }}
              className='-z-1 flex items-center justify-between gap-4 md:gap-6'
            >
              <div className='flex flex-col gap-2.5'>
                <span className='text-2xl font-semibold'>NovaCare Health</span>
                <span className='text-muted-foreground text-lg'>AI-Powered Health Platform</span>
              </div>

              <Button
                variant='outline'
                className='group-hover:bg-primary! group-hover:border-primary group-hover:text-primary-foreground! rounded-full px-4!'
                asChild
              >
                <Link href='/'>
                  Preview <EyeIcon className='stroke-foreground group-hover:stroke-primary-foreground' />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            style={{ translateY: div2TranslateY, translateX: div2TranslateX, scale: scale, rotate: div2Rotate }}
            transition={{ ease: 'easeInOut', duration: 0.6 }}
            className={cn(
              'group relative flex flex-col gap-6 **:transition-all **:duration-300',
              !isMobile && 'z-3 will-change-scroll perspective-distant transform-3d'
            )}
          >
            <div className='lg:h-93.5'>
              <div className={cn('overflow-hidden rounded-[12px] border shadow-sm group-hover:-rotate-3')}>
                <img
                  src='/images/portfolio/image-02.webp'
                  alt='Just Website project'
                  className='w-full rounded-[12px] lg:h-93.5 lg:object-center'
                />
              </div>
            </div>

            <motion.div
              style={{ opacity: textOpacity, translateY: textTranslateY, scale: textScale }}
              transition={{ ease: 'easeInOut', duration: 0.6 }}
              className='-z-1 flex items-center justify-between gap-4 md:gap-6'
            >
              <div className='flex flex-col gap-2.5'>
                <span className='text-2xl font-semibold'>Finova Analytics</span>
                <span className='text-muted-foreground text-lg'>Data Pipeline & Dashboard</span>
              </div>

              <Button
                variant='outline'
                className='group-hover:bg-primary! group-hover:border-primary group-hover:text-primary-foreground! rounded-full px-4!'
                asChild
              >
                <Link href='/'>
                  Preview <EyeIcon className='stroke-foreground group-hover:stroke-primary-foreground' />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            style={{ translateY: div3TranslateY, translateX: div3TranslateX, scale: scale, rotate: div3Rotate }}
            transition={{ ease: 'easeInOut', duration: 0.6 }}
            className={cn(
              'group relative flex flex-col gap-6 **:transition-all **:duration-300',
              !isMobile && 'z-2 will-change-scroll perspective-distant transform-3d'
            )}
          >
            <div className='lg:h-93.5'>
              <div className={cn('overflow-hidden rounded-[12px] border shadow-sm group-hover:rotate-3')}>
                <img
                  src='/images/portfolio/image-03.webp'
                  alt='Astro AI project'
                  className='w-full rounded-[12px] lg:h-93.5 lg:object-center'
                />
              </div>
            </div>
            <motion.div
              style={{ opacity: textOpacity, translateY: textTranslateY, scale: textScale }}
              transition={{ ease: 'easeInOut', duration: 0.6 }}
              className='-z-1 flex items-center justify-between gap-4 md:gap-6'
            >
              <div className='flex flex-col gap-2.5'>
                <span className='text-2xl font-semibold'>Vertex AI Studio</span>
                <span className='text-muted-foreground text-lg'>Full-Stack AI Product</span>
              </div>

              <Button
                variant='outline'
                className='group-hover:bg-primary! group-hover:border-primary group-hover:text-primary-foreground! rounded-full px-4!'
                asChild
              >
                <Link href='/'>
                  Preview <EyeIcon className='stroke-foreground group-hover:stroke-primary-foreground' />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            style={{ translateY: div4TranslateY, translateX: div4TranslateX, scale: scale, rotate: div4Rotate }}
            transition={{ ease: 'easeInOut', duration: 0.6 }}
            className={cn(
              'group relative flex flex-col gap-6 **:transition-all **:duration-300',
              !isMobile && 'z-1 will-change-scroll perspective-distant transform-3d'
            )}
          >
            <div className='lg:h-93.5'>
              <div className={cn('overflow-hidden rounded-[12px] border shadow-sm group-hover:-rotate-3')}>
                <img
                  src='/images/portfolio/image-04.webp'
                  alt='John Doe project'
                  className='w-full rounded-[12px] lg:h-93.5 lg:object-center dark:hidden'
                />
                <img
                  src='/images/portfolio/image-04-dark.webp'
                  alt='John Doe project'
                  className='hidden w-full rounded-[12px] lg:h-93.5 lg:object-center dark:block'
                />
              </div>
            </div>

            <motion.div
              style={{ opacity: textOpacity, translateY: textTranslateY, scale: textScale }}
              transition={{ ease: 'easeInOut', duration: 0.6 }}
              className='-z-1 flex items-center justify-between gap-4 md:gap-6'
            >
              <div className='flex flex-col gap-2.5'>
                <span className='text-2xl font-semibold'>Meridian Commerce</span>
                <span className='text-muted-foreground text-lg'>E-Commerce Redesign</span>
              </div>

              <Button
                variant='outline'
                className='group-hover:bg-primary! group-hover:border-primary group-hover:text-primary-foreground! rounded-full px-4!'
                asChild
              >
                <Link href='/'>
                  Preview <EyeIcon className='stroke-foreground group-hover:stroke-primary-foreground' />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </MotionPreset>
    </section>
  )
}

export default Portfolio
