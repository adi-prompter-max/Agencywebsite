import Link from 'next/link'
import { ArrowUpRightIcon, FramerIcon, LaptopIcon, MessageSquareMoreIcon, PaletteIcon, PenToolIcon } from 'lucide-react'

import BlurText from '@/components/ui/blur-text'
import ImageStack from '@/components/blocks/services/image-stack'
import type { ImageCard } from '@/components/blocks/services/image-stack'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

import { MotionPreset } from '@/components/ui/motion-preset'
import { Marquee } from '@/components/ui/marquee'
import { CraftButton, CraftButtonIcon, CraftButtonLabel } from '@/components/ui/craft-button'

const Services = ({
  uiImages,
  skills,
  framerImages
}: {
  uiImages: ImageCard[]
  framerImages: ImageCard[]
  skills: string[]
}) => {
  return (
    <section id='services' className='relative'>
      <MotionPreset
        fade
        blur
        transition={{ duration: 0.5 }}
        delay={0.15}
        className='relative overflow-hidden border-y xl:flex'
      >
        <div className='m-6 w-full shrink-2 bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--primary)_15%,transparent)_2px,transparent_2px)] bg-size-[18px_18px] max-xl:hidden'></div>

        <div className='mx-auto max-w-6xl space-y-8 px-4 py-8 min-[1158px]:border-x sm:space-y-16 sm:px-6 sm:py-16 lg:px-8'>
          <div className='space-y-2.5'>
            <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.5 }}>
              <Badge variant='outline' className='rounded-none'>
                Services
              </Badge>
            </MotionPreset>
            <div className='flex justify-between gap-4 max-md:flex-col'>
              <MotionPreset delay={0.3} transition={{ duration: 0.5 }} className='max-w-100'>
                <h2 className='text-2xl font-semibold sm:text-3xl lg:text-4xl'>
                  <BlurText
                    text='End-to-end services that drive results. 🚀'
                    delay={50}
                    animateBy='words'
                    direction='bottom'
                  />
                </h2>
              </MotionPreset>
              <MotionPreset
                delay={0.3}
                fade
                blur
                slide={{ direction: 'down', offset: 50 }}
                transition={{ duration: 0.5 }}
              >
                <p className='text-muted-foreground max-w-xl text-lg'>
                  Whether you need a product built from scratch or an existing system supercharged with AI, we deliver
                  solutions that work. From design to deployment, every layer is handled by our team.
                </p>
              </MotionPreset>
            </div>
          </div>

          <MotionPreset delay={0.45} fade blur transition={{ duration: 0.6 }} className='-mx-4 sm:-mx-6 lg:-mx-8'>
            <Separator />
          </MotionPreset>

          {/* Grid */}
          <div className='grid gap-6 sm:grid-cols-2'>
            <div className='flex flex-col gap-6'>
              {/* UI/UX Design */}
              <MotionPreset fade blur slide={{ offset: 50 }} delay={0.8} transition={{ duration: 0.6 }}>
                <Card className='bg-muted rounded-3xl border-0 shadow-none'>
                  <CardHeader className='gap-3'>
                    <CardTitle className='flex items-center gap-2.5 text-xl'>
                      <PaletteIcon className='size-5' />
                      <span>UX Design & Strategy</span>
                    </CardTitle>
                    <CardDescription className='text-lg'>
                      We craft intuitive user experiences grounded in research. From wireframes to high-fidelity
                      prototypes, every interaction is designed with purpose.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ImageStack images={uiImages} />
                  </CardContent>
                </Card>
              </MotionPreset>

              {/* Web Design */}
              <MotionPreset fade blur slide={{ offset: 50 }} delay={1.2} transition={{ duration: 0.6 }}>
                <Card className='rounded-3xl shadow-none'>
                  <CardHeader className='gap-3'>
                    <CardTitle className='flex items-center gap-2.5 text-xl'>
                      <LaptopIcon className='size-5' />
                      <span>Front-End Development</span>
                    </CardTitle>
                    <CardDescription className='text-lg'>
                      We build modern, responsive front-ends with React, Next.js, and Tailwind. Pixel-perfect
                      interfaces optimized for performance and accessibility.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </MotionPreset>
            </div>

            <div className='flex flex-col gap-6'>
              {/* Logo Design */}
              <MotionPreset
                fade
                blur
                delay={0.6}
                slide={{ direction: 'right', offset: 50 }}
                transition={{ duration: 0.6 }}
              >
                <Card className='rounded-3xl shadow-none'>
                  <CardHeader className='gap-3'>
                    <CardTitle className='flex items-center gap-2.5 text-xl'>
                      <PenToolIcon className='size-5' />
                      <span>Back-End & Data Pipelines</span>
                    </CardTitle>
                    <CardDescription className='text-lg'>
                      Robust APIs, microservices, and scalable data pipelines built to handle real-world
                      complexity and growth.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </MotionPreset>

              {/* Framer Design */}
              <MotionPreset
                fade
                blur
                slide={{ direction: 'right', offset: 50 }}
                delay={1}
                transition={{ duration: 0.6 }}
                className='flex-1'
              >
                <Card className='bg-muted h-full rounded-3xl border-0 shadow-none'>
                  <CardHeader className='gap-3'>
                    <CardTitle className='flex items-center gap-2.5 text-xl'>
                      <FramerIcon className='size-5' />
                      <span>AI & Product Strategy</span>
                    </CardTitle>
                    <CardDescription className='text-lg'>
                      We integrate AI into your product roadmap and operations. From LLM integrations to predictive
                      models, we make AI work for your business.
                    </CardDescription>
                  </CardHeader>
                  <Marquee pauseOnHover duration={20} gap={1} className='flex-1 items-center py-0'>
                    {framerImages.map((image, index) => (
                      <img key={index} src={image.img} alt={image.alt} className='h-60 w-full max-w-73 rounded-md' />
                    ))}
                  </Marquee>
                </Card>
              </MotionPreset>
            </div>
          </div>

          {/* Skills */}
          <MotionPreset
            className='relative'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            delay={1.35}
            transition={{ duration: 0.6 }}
          >
            <div className='from-background pointer-events-none absolute inset-y-0 left-0 z-1 w-35 bg-linear-to-r to-transparent max-sm:hidden' />
            <div className='from-background pointer-events-none absolute inset-y-0 right-0 z-1 w-35 bg-linear-to-l to-transparent max-sm:hidden' />
            <div className='w-full overflow-hidden'>
              <Marquee pauseOnHover duration={30} gap={1}>
                {skills.map((skill, index) => (
                  <Badge variant='outline' key={index} className='px-4 py-1 text-sm'>
                    {skill}
                  </Badge>
                ))}
              </Marquee>
            </div>
            <div className='w-full overflow-hidden'>
              <Marquee pauseOnHover duration={30} gap={1} reverse>
                {skills.map((skill, index) => (
                  <Badge variant='outline' key={index} className='px-4 py-1 text-sm'>
                    {skill}
                  </Badge>
                ))}
              </Marquee>
            </div>
          </MotionPreset>

          <MotionPreset delay={1.5} fade blur transition={{ duration: 0.6 }} className='-mx-4 sm:-mx-6 lg:-mx-8'>
            <Separator />
          </MotionPreset>

          {/* Action Button */}
          <MotionPreset
            className='flex items-center justify-center gap-4'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            delay={1.65}
            transition={{ duration: 0.6 }}
          >
            <CraftButton asChild>
              <Link href='#'>
                <CraftButtonLabel>Work with us</CraftButtonLabel>
                <CraftButtonIcon>
                  <ArrowUpRightIcon className='size-3 stroke-2 transition-transform duration-500 group-hover:rotate-45' />
                </CraftButtonIcon>
              </Link>
            </CraftButton>
            <Separator className='!h-9' orientation='vertical' />
            <Button variant='outline' className='rounded-full' asChild>
              <Link href='#'>
                Let&apos; talk <MessageSquareMoreIcon className='size-4' />
              </Link>
            </Button>
          </MotionPreset>
        </div>
        <div className='m-6 w-full shrink-2 bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--primary)_15%,transparent)_2px,transparent_2px)] bg-size-[18px_18px] max-xl:hidden'></div>
      </MotionPreset>
    </section>
  )
}

export default Services
