import type { ReactNode } from 'react'

import { ChevronUpIcon, DiamondIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Separator } from '@/components/ui/separator'
import { MotionPreset } from '@/components/ui/motion-preset'
import {
  AnimatedChevronsAccordionContent,
  AnimatedChevronsAccordionItem,
  AnimatedChevronsAccordionRoot,
  AnimatedChevronsAccordionTrigger
} from '@/components/animated-chevrons-accordion'

export type ExperienceProps = {
  companyName: string
  icon: ReactNode
  showInMore?: boolean
  items: {
    role: string
    value: string
    duration: string
    type: string
    badges?: string[]
    responsibilities: string[]
  }[]
}

const Experience = ({ experienceData }: { experienceData: ExperienceProps[] }) => {
  return (
    <section id='experience' className='relative flex-1 border-y'>
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
            <Badge variant='outline' className='rounded-none px-1.5'>
              Capabilities
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
                Capabilities that
              </MotionPreset>
              <MotionPreset
                fade
                blur
                slide={{ direction: 'down', offset: 50 }}
                delay={0.45}
                transition={{ duration: 0.5 }}
              >
                deliver. 😎
              </MotionPreset>
            </h2>
            <MotionPreset
              delay={0.3}
              fade
              blur
              slide={{ direction: 'down', offset: 50 }}
              transition={{ duration: 0.5 }}
            >
              <p className='text-muted-foreground max-w-150 text-xl'>
                From product strategy to deployment, we combine AI expertise with deep engineering to help companies
                ship faster and build products that scale.
              </p>
            </MotionPreset>
          </div>
        </div>

        {/* Projects */}
        <MotionPreset delay={0.75} fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.5 }}>
          <Collapsible>
            {/* Always visible experiences (showInMore is false or undefined) */}
            {experienceData
              .filter(exp => !exp.showInMore)
              .map((exp, index) => (
                <div
                  key={`${exp.companyName}-${index}`}
                  className='border-y px-8 py-2.5 first:border-b-0 last:border-t-0'
                >
                  <div className='mb-3.25 flex items-center gap-3'>
                    {exp.icon}
                    <p className='text-xl font-semibold'>{exp.companyName}</p>
                  </div>

                  <AnimatedChevronsAccordionRoot
                    type='single'
                    collapsible
                    defaultValue='intern-ui-designer-ct'
                    className='relative w-full space-y-3.5'
                  >
                    {exp.items.map((item, idx) => (
                      <AnimatedChevronsAccordionItem
                        key={`${item.role}-${idx}`}
                        value={item.value}
                        className='before:bg-primary/10 relative border-0 before:absolute before:top-9 before:left-3.75 before:h-[60%] before:w-px last:before:hidden data-[state=open]:before:h-[80%]'
                      >
                        <AnimatedChevronsAccordionTrigger className='flex flex-1 cursor-pointer items-center justify-between gap-4 text-left transition-all outline-none disabled:pointer-events-none disabled:opacity-50'>
                          <div className='flex grow flex-col gap-1.5'>
                            <div className='flex items-center gap-5 px-2'>
                              <DiamondIcon className='fill-primary/40 size-4 stroke-0' />
                              <span className='text-lg'>{item.role}</span>
                            </div>
                            <div className='text-muted-foreground flex items-center gap-3 px-11 text-xl font-normal'>
                              <span>{item.type}</span>
                              <Separator
                                orientation='vertical'
                                className='bg-muted-foreground data-[orientation=vertical]:h-4 data-[orientation=vertical]:w-0.5 max-sm:hidden'
                              />
                              <span className='max-sm:hidden'>{item.duration}</span>
                            </div>
                          </div>
                        </AnimatedChevronsAccordionTrigger>
                        <AnimatedChevronsAccordionContent className='space-y-3 px-11 pt-2 text-base'>
                          <ul className='text-muted-foreground marker:text-muted-foreground list-inside list-disc space-y-3'>
                            {item.responsibilities?.map((responsibility, idx) => (
                              <li key={`${responsibility}-${idx}`}>{responsibility}</li>
                            ))}
                          </ul>

                          <div className='flex items-center gap-3'>
                            {item.badges?.map((badge, badgeIdx) => (
                              <Badge key={`${badge}-${badgeIdx}`} variant='secondary'>
                                {badge}
                              </Badge>
                            ))}
                          </div>
                        </AnimatedChevronsAccordionContent>
                      </AnimatedChevronsAccordionItem>
                    ))}
                  </AnimatedChevronsAccordionRoot>
                </div>
              ))}

            {/* Collapsible content - experiences where showInMore is true */}
            <CollapsibleContent className='data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden transition-all duration-300'>
              {experienceData
                .filter(exp => exp.showInMore)
                .map((exp, index) => (
                  <div key={`${exp.companyName}-${index}`} className='border-y px-8 py-2.5 last:border-t-0'>
                    <div className='mb-3.25 flex items-center gap-3'>
                      {exp.icon}
                      <p className='text-xl font-semibold'>{exp.companyName}</p>
                    </div>

                    <AnimatedChevronsAccordionRoot type='single' collapsible className='relative w-full space-y-3.5'>
                      {exp.items.map((item, idx) => (
                        <AnimatedChevronsAccordionItem
                          key={`${item.role}-${idx}`}
                          value={item.value}
                          className='before:bg-primary/10 relative border-0 before:absolute before:top-9 before:left-3.75 before:h-[60%] before:w-px last:before:hidden data-[state=open]:before:h-[80%]'
                        >
                          <AnimatedChevronsAccordionTrigger className='flex flex-1 cursor-pointer items-center justify-between gap-4 text-left transition-all outline-none disabled:pointer-events-none disabled:opacity-50'>
                            <div className='flex grow flex-col gap-1.5'>
                              <div className='flex items-center gap-5 px-2'>
                                <DiamondIcon className='fill-primary/40 size-4 stroke-0' />
                                <span className='text-lg'>{item.role}</span>
                              </div>
                              <div className='text-muted-foreground flex items-center gap-3 px-11 text-xl font-normal'>
                                <span>{item.type}</span>
                                <Separator
                                  orientation='vertical'
                                  className='bg-muted-foreground data-[orientation=vertical]:h-4 data-[orientation=vertical]:w-0.5 max-sm:hidden'
                                />
                                <span className='max-sm:hidden'>{item.duration}</span>
                              </div>
                            </div>
                          </AnimatedChevronsAccordionTrigger>
                          <AnimatedChevronsAccordionContent className='space-y-3 px-11 pt-2 text-base'>
                            <ul className='text-muted-foreground marker:text-muted-foreground list-inside list-disc space-y-3'>
                              {item.responsibilities?.map((responsibility, idx) => (
                                <li key={`${responsibility}-${idx}`}>{responsibility}</li>
                              ))}
                            </ul>

                            <div className='flex items-center gap-3'>
                              {item.badges?.map((badge, badgeIdx) => (
                                <Badge key={`${badge}-${badgeIdx}`} variant='secondary'>
                                  {badge}
                                </Badge>
                              ))}
                            </div>
                          </AnimatedChevronsAccordionContent>
                        </AnimatedChevronsAccordionItem>
                      ))}
                    </AnimatedChevronsAccordionRoot>
                  </div>
                ))}
            </CollapsibleContent>

            <div className='flex justify-center py-11'>
              <CollapsibleTrigger asChild>
                <Button variant='outline' className='rounded-full px-4!'>
                  <span className='[[data-state=open]>&]:hidden'>See more</span>
                  <span className='[[data-state=closed]>&]:hidden'>See less</span>
                  <ChevronUpIcon className='[[data-state=closed]>&]:rotate-180' />
                </Button>
              </CollapsibleTrigger>
            </div>
          </Collapsible>
        </MotionPreset>
      </MotionPreset>
    </section>
  )
}

export default Experience
