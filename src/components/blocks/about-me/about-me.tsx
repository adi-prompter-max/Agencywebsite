'use client'

import {
  InstagramIcon,
  DribbbleIcon,
  LinkedinIcon,
  GithubIcon,
  GraduationCapIcon,
  BicepsFlexedIcon
} from 'lucide-react'

import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MotionPreset } from '@/components/ui/motion-preset'
import { SpinningText } from '@/components/spinning-text'

type SocialLink = {
  icon: 'instagram' | 'dribbble' | 'linkedin' | 'github'
  url: string
}

type Tool = {
  name: string
  icon: string
  darkIcon?: string
  url?: string
  showName?: boolean
}

type AboutContent = {
  paragraphs: string[]
}

type AboutMeProps = {
  name: string
  role: string
  image: string
  imageAlt: string
  availableForHire?: boolean
  socialLinks: SocialLink[]
  signature?: string
  signatureDark?: string
  aboutContent: AboutContent
  toolsTitle: string
  toolsDescription: string
  tools: Tool[]
}

const socialIcons = {
  instagram: InstagramIcon,
  dribbble: DribbbleIcon,
  linkedin: LinkedinIcon,
  github: GithubIcon
}

const AboutMe = ({
  name,
  role,
  image,
  imageAlt,
  availableForHire = false,
  socialLinks,
  signature,
  signatureDark,
  aboutContent,
  toolsTitle,
  toolsDescription,
  tools
}: AboutMeProps) => {
  return (
    <section id='about' className='relative'>
      <MotionPreset
        fade
        blur
        transition={{ duration: 0.5 }}
        delay={0.15}
        className='mx-auto max-w-6xl flex-1 min-[1147px]:border-x'
      >
        {/* Header */}
        <div className='space-y-2.5 px-4 py-16 md:px-6 lg:px-8'>
          <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.5 }}>
            <Badge variant='outline' className='rounded-none px-1.5'>
              About us
            </Badge>
          </MotionPreset>
          <div className='flex justify-between gap-4 max-lg:flex-col'>
            <h2 className='max-w-100 text-2xl font-semibold sm:text-3xl lg:text-4xl'>
              <MotionPreset
                fade
                blur
                slide={{ direction: 'down', offset: 50 }}
                delay={0.3}
                transition={{ duration: 0.5 }}
              >
                The agency that builds your
              </MotionPreset>
              <MotionPreset
                fade
                blur
                slide={{ direction: 'down', offset: 50 }}
                delay={0.45}
                transition={{ duration: 0.5 }}
              >
                vision. 💬
              </MotionPreset>
            </h2>
            <MotionPreset
              delay={0.3}
              fade
              blur
              slide={{ direction: 'down', offset: 50 }}
              transition={{ duration: 0.5 }}
            >
              <p className='text-muted-foreground max-w-160 text-xl'>
                We help companies ship faster by combining AI, design, and engineering into a single end-to-end
                delivery team that takes your product from concept to launch.
              </p>
            </MotionPreset>
          </div>
        </div>

        <MotionPreset delay={0.45} fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.5 }}>
          <hr />
        </MotionPreset>

        {/* Profile and Content Section */}
        <div className='grid grid-cols-1 gap-8 px-4 py-16 md:px-6 lg:grid-cols-2 lg:gap-11 lg:px-8'>
          {/* Profile Card */}
          <MotionPreset
            className='space-y-7'
            fade
            slide={{ direction: 'down', offset: 80 }}
            blur
            delay={0.3}
            transition={{ duration: 0.6 }}
          >
            <div className='relative'>
              <div className='group relative overflow-hidden rounded-xl lg:rounded-3xl'>
                <img
                  src={image}
                  alt={imageAlt}
                  className='w-full object-cover transition-transform duration-500 group-hover:scale-105'
                />
                {availableForHire && (
                  <Badge
                    variant='secondary'
                    className='bg-background text-card-foreground absolute inset-x-1/2 bottom-0 flex -translate-x-1/2 items-center gap-1.5 rounded-t-sm rounded-b-none px-2.5 py-1.5 text-xs font-medium'
                  >
                    <span className='relative flex size-2'>
                      <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-600 opacity-75 dark:bg-green-400'></span>
                      <span className='relative inline-flex size-2 rounded-full bg-green-700 dark:bg-green-500'></span>
                    </span>
                    Accepting Projects
                  </Badge>
                )}
              </div>
              {/* Decorative Badge */}
              <div className='border-foreground absolute top-0 left-0 grid size-26.5 -translate-y-1/3 place-content-center rounded-full border xl:-translate-x-1/3'>
                <div className='border-foreground grid size-16 place-content-center rounded-full border'>
                  <div className='text-background bg-primary flex size-8.25 -rotate-45 items-center justify-center rounded-full'>
                    <GraduationCapIcon className='z-10 size-5 stroke-[1.5]' />
                  </div>
                </div>
                <div className='absolute inset-0 w-full translate-y-1/2'>
                  <SpinningText className='z-10 text-xs' radius={5.3}>
                    End-to-End AI * Product Agency *
                  </SpinningText>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-between gap-2 max-sm:flex-col max-sm:items-stretch'>
              <div className='flex items-center gap-3'>
                <h3 className='text-xl font-semibold'>{name}</h3>
                <p className='text-muted-foreground text-lg'>{role}</p>
              </div>

              <div className='flex items-center'>
                {socialLinks.map((link, index) => {
                  const Icon = socialIcons[link.icon]
                  const linkLabel = link.icon.charAt(0).toUpperCase() + link.icon.slice(1)

                  return (
                    <Button
                      key={index}
                      variant='link'
                      className='text-muted-foreground hover:text-foreground'
                      size='icon'
                      asChild
                    >
                      <Link
                        href={link.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={`Visit my ${linkLabel} profile`}
                      >
                        <Icon className='size-5' aria-hidden='true' />
                      </Link>
                    </Button>
                  )
                })}
              </div>
            </div>
          </MotionPreset>

          {/* Content */}
          <MotionPreset
            className='space-y-6 lg:space-y-11'
            fade
            slide={{ direction: 'down', offset: 100 }}
            blur
            delay={0.4}
            transition={{ duration: 0.7 }}
          >
            {aboutContent.paragraphs.map((paragraph, index) => {
              const parts = paragraph.split('**')

              return (
                <MotionPreset
                  key={index}
                  component='p'
                  className='text-muted-foreground text-base leading-relaxed md:text-lg'
                  fade
                  blur
                  slide={{ direction: 'down', offset: 50 }}
                  delay={0.5 + index * 0.1}
                  transition={{ duration: 0.5 }}
                >
                  {parts.map((part, i) =>
                    i % 2 === 0 ? (
                      part
                    ) : (
                      <span key={i} className='text-primary'>
                        {part}
                      </span>
                    )
                  )}
                </MotionPreset>
              )
            })}
            {signature &&
              (signatureDark ? (
                <div className='flex items-center justify-center'>
                  <img src={signature} alt='Signature' className='h-12.5 dark:hidden' />
                  <img src={signatureDark} alt='Signature' className='hidden h-12.5 dark:block' />
                </div>
              ) : (
                <img src={signature} alt='Signature' className='h-12.5' />
              ))}
          </MotionPreset>
        </div>

        {/* Tools Section */}
        <MotionPreset
          fade
          slide={{ direction: 'down', offset: 80 }}
          blur
          delay={0.8}
          transition={{ duration: 0.6 }}
          className='px-4 pb-16 md:px-6 lg:px-8'
        >
          <Card className='relative z-1 overflow-hidden rounded-3xl border shadow-none'>
            <CardContent>
              <div className='text-primary mb-4 flex items-center gap-1.5'>
                <BicepsFlexedIcon className='size-5' />
                <h4 className='text-xl font-semibold'>{toolsTitle}</h4>
              </div>
              <p className='text-muted-foreground mb-6 text-base lg:text-lg'>{toolsDescription}</p>

              <div className='flex flex-wrap items-center gap-6'>
                {tools.map((tool, index) => (
                  <MotionPreset
                    key={index}
                    fade
                    blur
                    zoom={{ initialScale: 0.9 }}
                    delay={0.9 + index * 0.05}
                    transition={{ duration: 0.5 }}
                  >
                    <Badge variant='outline' asChild>
                      <Link
                        href={tool.url || '#'}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='gap-1.5 px-4 py-2.5 !text-sm'
                        aria-label={(tool.showName ?? true) ? undefined : `${tool.name} tool`}
                      >
                        {tool.darkIcon ? (
                          <>
                            <img src={tool.icon} alt='light icons' className='h-6 dark:hidden' aria-hidden='true' />
                            <img
                              src={tool.darkIcon}
                              alt='dark icons'
                              className='hidden h-6 dark:block'
                              aria-hidden='true'
                            />
                          </>
                        ) : (
                          <img src={tool.icon} alt='' className='h-6' aria-hidden='true' />
                        )}
                        {(tool.showName ?? true) && <span className='text-sm font-medium'>{tool.name}</span>}
                      </Link>
                    </Badge>
                  </MotionPreset>
                ))}
              </div>
            </CardContent>
            <div className='absolute -right-[11%] -bottom-18 -z-1 flex w-[70%] -rotate-8 flex-wrap gap-x-3.75 gap-y-2.25 max-lg:hidden xl:-bottom-13'>
              {Array.from({ length: 400 }).map((_, index) => (
                <div key={index} className='bg-primary/20 relative inline-flex size-0.75 rounded-full' />
              ))}
            </div>
          </Card>
        </MotionPreset>
      </MotionPreset>
    </section>
  )
}

export default AboutMe
