'use client'

import Link from 'next/link'
import { ArrowUpRightIcon, RocketIcon } from 'lucide-react'

import { MotionPreset } from '@/components/ui/motion-preset'

import { Rating } from '@/components/ui/rating'
import { Marquee } from '@/components/ui/marquee'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { CraftButton, CraftButtonLabel, CraftButtonIcon } from '@/components/ui/craft-button'

import { Badge } from '@/components/ui/badge'

type AvatarData = {
  src: string
  fallback: string
  name: string
}[]

const HeroSection = ({ avatars }: { avatars: AvatarData }) => {
  return (
    <section id='home' className='relative flex-1'>
      <MotionPreset
        fade
        blur
        transition={{ duration: 0.5 }}
        delay={0.1}
        className='mx-auto grid max-w-6xl grid-cols-1 flex-col gap-12 px-4 py-12 min-[1147px]:border-x sm:gap-16 sm:px-6 sm:py-16 md:grid-cols-2 lg:gap-24 lg:px-8 lg:py-24'
      >
        <div className='space-y-5'>
          <MotionPreset fade slide blur transition={{ duration: 0.5 }}>
            <Badge className='px-2.5 py-1 shadow-sm' variant='outline'>
              <span className='relative flex size-2'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-600 opacity-75 dark:bg-green-400'></span>
                <span className='relative inline-flex size-2 rounded-full bg-green-600 dark:bg-green-400'></span>
              </span>
              Accepting new clients | Limited spots available
            </Badge>
          </MotionPreset>

          <MotionPreset fade blur transition={{ duration: 0.9 }} delay={0.2}>
            <div className='flex flex-col gap-2 text-2xl font-bold sm:text-3xl lg:text-5xl'>
              <div className='flex items-center gap-2.25'>
                <MotionPreset
                  slide={{ direction: 'left', offset: 40 }}
                  blur='6px'
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  delay={0.8}
                  motionProps={{
                    initial: { rotate: -5, opacity: 0.7 },
                    animate: { rotate: 0, opacity: 0.7 }
                  }}
                >
                  <span className='text-muted-foreground'>Building</span>
                </MotionPreset>
                <MotionPreset
                  zoom={{ initialScale: 0.3, scale: 1 }}
                  blur='10px'
                  transition={{ type: 'spring', stiffness: 250, damping: 18 }}
                  delay={1}
                  motionProps={{
                    initial: { rotate: 30 },
                    animate: { rotate: 0 },
                    whileHover: { scale: 1.1, rotate: 5 }
                  }}
                >
                  <div className='relative flex'>
                    <span className='flex size-10 shrink-0 rotate-10 items-center justify-center rounded-[7px] bg-sky-600/20 dark:bg-sky-400/20'>
                      <img src='/images/brand-logo/framer-logo.webp' alt='framer' className='max-w-6 object-cover' />
                    </span>
                    <span className='ring-background flex size-10 shrink-0 rotate-[-6.2deg] items-center justify-center rounded-[7px] bg-[color-mix(in_oklab,var(--destructive)_20%,#fff)] ring-3'>
                      <img src='/images/brand-logo/figma-icon.webp' alt='figma' className='max-w-6 object-cover' />
                    </span>
                  </div>
                </MotionPreset>
                <MotionPreset
                  zoom={{ initialScale: 0.8, scale: 1 }}
                  blur='6px'
                  transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
                  delay={1.15}
                  motionProps={{
                    initial: { rotate: 3 },
                    animate: { rotate: 0 }
                  }}
                >
                  <span>Products</span>
                </MotionPreset>
              </div>
              <div className='flex items-center gap-2.25'>
                <MotionPreset
                  slide={{ direction: 'up', offset: 35 }}
                  blur='6px'
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  delay={1.25}
                  motionProps={{
                    initial: { rotate: -2 },
                    animate: { rotate: 0 }
                  }}
                >
                  <span>End-to-End</span>
                </MotionPreset>
                <MotionPreset
                  zoom={{ initialScale: 0.7, scale: 1 }}
                  blur='8px'
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  delay={1.4}
                  motionProps={{
                    initial: { rotate: 8 },
                    animate: { rotate: 0 },
                    whileHover: { scale: 1.05, rotate: -2 }
                  }}
                >
                  <span className='inline-block'>With AI,</span>
                </MotionPreset>
              </div>
              <div className='flex items-center gap-2.25'>
                <MotionPreset
                  slide={{ direction: 'right', offset: 40 }}
                  blur='6px'
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  delay={1.5}
                  motionProps={{
                    initial: { rotate: 4 },
                    animate: { rotate: 0 }
                  }}
                >
                  <span>Scale</span>
                </MotionPreset>

                <MotionPreset
                  zoom={{ initialScale: 0, scale: 1 }}
                  blur='12px'
                  transition={{
                    type: 'spring',
                    stiffness: 350,
                    damping: 12,
                    mass: 0.8
                  }}
                  delay={1.65}
                  motionProps={{
                    initial: { rotate: 180 },
                    animate: { rotate: 0 },
                    whileHover: { scale: 1.15, rotate: 10 }
                  }}
                >
                  <span className='bg-destructive/20 flex size-10 shrink-0 items-center justify-center rounded-[7px]'>
                    <RocketIcon className='fill-destructive size-6 stroke-0' />
                  </span>
                </MotionPreset>

                <MotionPreset
                  zoom={{ initialScale: 0.5, scale: 1 }}
                  blur='10px'
                  transition={{
                    duration: 0.9,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                  delay={1.8}
                  motionProps={{
                    initial: { rotate: -5, opacity: 0.7 },
                    animate: { rotate: 0, opacity: 0.7 },
                    whileHover: { scale: 1.05 }
                  }}
                >
                  <span className='text-muted-foreground'>Faster.</span>
                </MotionPreset>
              </div>
            </div>
          </MotionPreset>

          {/* Para */}
          <MotionPreset fade slide blur transition={{ duration: 0.5 }} delay={0.5}>
            <p className='text-muted-foreground'>
              From UX design to data pipelines, <span className='text-foreground'>we build end-to-end AI-powered solutions</span>{' '}
              that transform your business. Whether it&apos;s{' '}
              <span className='text-foreground'>product strategy, front-end, or back-end,</span> we handle it all so you
              can focus on growth.
            </p>
          </MotionPreset>

          <MotionPreset fade slide blur transition={{ duration: 0.5 }} delay={0.7}>
            <CraftButton asChild>
              <Link href='#'>
                <CraftButtonLabel>Get Started</CraftButtonLabel>
                <CraftButtonIcon>
                  <ArrowUpRightIcon className='size-3 stroke-2 transition-transform duration-500 group-hover:rotate-45' />
                </CraftButtonIcon>
              </Link>
            </CraftButton>
          </MotionPreset>
        </div>
      </MotionPreset>
      <MotionPreset
        fade
        blur
        transition={{ duration: 0.5 }}
        delay={0.15}
        className='relative flex border-y max-[1196px]:mx-auto max-[1196px]:max-w-6xl'
      >
        <div className='m-1.75 w-full shrink-2 bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--primary)_15%,transparent)_2px,transparent_2px)] bg-size-[18px_18px] max-[1196px]:hidden'></div>

        <div className='bg-background flex max-w-6xl grow gap-2.5 px-4 py-2.5 max-md:flex-col min-[1147px]:border-x sm:px-6 lg:px-8'>
          <MotionPreset
            fade
            slide
            blur
            transition={{ duration: 0.5 }}
            delay={0.6}
            className='flex flex-1 items-center gap-1.75 max-md:justify-center max-sm:flex-col max-sm:text-center'
          >
            <div className='flex -space-x-4'>
              {avatars.map((avatar, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Avatar className='ring-background size-12 ring-2 transition-all duration-300 ease-in-out hover:z-1 hover:-translate-y-1 hover:shadow-md'>
                      <AvatarImage src={avatar.src} alt={avatar.name} />
                      <AvatarFallback className='text-xs'>{avatar.fallback}</AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{avatar.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>

            <div>
              <div className='flex items-center gap-1.75'>
                <Rating
                  readOnly
                  variant='yellow'
                  size={24}
                  value={4.5}
                  precision={0.5}
                  className='max-sm:justify-center'
                />
                <p className='font-medium'>4.5</p>
              </div>
              <p className='text-sm text-nowrap'>Trusted by 100+ companies</p>
            </div>
          </MotionPreset>
          <MotionPreset fade blur delay={0.7} transition={{ duration: 0.5 }} className='relative overflow-hidden'>
            <div className='from-background pointer-events-none absolute inset-y-0 left-0 z-1 w-25 bg-linear-to-r via-85% to-transparent' />
            <div className='from-background pointer-events-none absolute inset-y-0 right-0 z-1 w-25 bg-linear-to-l via-85% to-transparent' />
            <Marquee pauseOnHover duration={20} reverse gap={4} className='*:items-center'>
              <img src='/images/brand-logo/dailydev-logo-bw.webp' alt='Daily Dev' className='h-9.5 shrink-0' />
              <img src='/images/brand-logo/ycombinator-logo-bw.webp' alt='Y Combinator' className='h-9 shrink-0' />
              <img src='/images/brand-logo/bestofjs-logo-bw.webp' alt='Best of JS' className='h-9 shrink-0' />
              <img src='/images/brand-logo/product-hunt-logo-bw.webp' alt='Product Hunt' className='h-9 shrink-0' />
              <img src='/images/brand-logo/reddit-logo-bw.webp' alt='Reddit' className='h-9 shrink-0' />
              <img src='/images/brand-logo/launchtory-logo-bw.webp' alt='Launchtory' className='h-11 shrink-0' />
              <img src='/images/brand-logo/medium-logo-bw.webp' alt='Medium' className='h-8.5 shrink-0' />
              <img src='/images/brand-logo/devto-logo-bw.webp' alt='Dev.to' className='h-11.5 shrink-0' />
            </Marquee>
          </MotionPreset>
        </div>
        <div className='m-1.75 w-full shrink-2 bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--primary)_15%,transparent)_2px,transparent_2px)] bg-size-[18px_18px] max-[1196px]:hidden'></div>
      </MotionPreset>
    </section>
  )
}

export default HeroSection
