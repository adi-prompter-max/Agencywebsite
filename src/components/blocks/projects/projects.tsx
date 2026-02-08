import { ChevronUpIcon } from 'lucide-react'

import Link from 'next/link'

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

const Projects = () => {
  return (
    <section id='projects' className='relative flex-1'>
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
              Projects
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
                Case studies that speak for
              </MotionPreset>
              <MotionPreset
                fade
                blur
                slide={{ direction: 'down', offset: 50 }}
                delay={0.45}
                transition={{ duration: 0.5 }}
              >
                itself. 🗣️
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
                Deep dives into projects where we owned the full stack - from product strategy and UX design to
                backend engineering, data pipelines, and AI integration.
              </p>
            </MotionPreset>
          </div>
        </div>

        {/* Projects */}
        <MotionPreset delay={0.75} fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.5 }}>
          <Collapsible>
            <AnimatedChevronsAccordionRoot
              type='single'
              collapsible
              defaultValue='shadcn-studio'
              className='w-full border-t'
            >
              {/* shadcn/studio */}
              <AnimatedChevronsAccordionItem value='shadcn-studio'>
                <AnimatedChevronsAccordionTrigger className='focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 cursor-pointer items-center justify-between gap-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 data-[state=open]:border-b'>
                  <span className='flex items-center'>
                    <img src='/images/project/image-10.webp' alt='shadcn studio' className='m-8 size-10 dark:invert' />
                    <div className='flex flex-col gap-1.5 border-l px-2.5 py-5 text-xl'>
                      <span className='font-semibold'>emote Care</span>
                      <div className='text-muted-foreground flex items-center gap-3 font-normal'>
                        <span>4 Months</span>
                        <Separator
                          orientation='vertical'
                          className='bg-muted-foreground data-[orientation=vertical]:h-4 data-[orientation=vertical]:w-0.5 max-sm:hidden'
                        />
                        <span className='max-sm:hidden'>Jan 2025 - May 2025</span>
                      </div>
                    </div>
                  </span>
                </AnimatedChevronsAccordionTrigger>
                <AnimatedChevronsAccordionContent className='text-muted-foreground space-y-6 px-8 py-5 text-base'>
                  <p>
                    Built the online mental health marketplace for emote Care, a UK-based pay-as-you-go platform
                    connecting clients with therapists. We designed and developed the full platform: therapist
                    discovery and matching, session scheduling and payments, free introductory call booking,
                    and wellbeing resources. The platform enabled accessible, flexible therapy without long-term
                    commitments.
                  </p>

                  <div className='flex flex-col gap-5'>
                    <div>
                      <span className='text-foreground font-medium'>🔍 Therapist Discovery: </span>
                      <span>
                        Smart matching system helping clients find suitable, trusted therapists based on their needs
                        and preferences.
                      </span>
                    </div>
                    <div>
                      <span className='text-foreground font-medium'>📅 Scheduling & Payments: </span>
                      <span>
                        Seamless booking system with pay-as-you-go sessions and free introductory call support.
                      </span>
                    </div>
                    <div>
                      <span className='text-foreground font-medium'>💚 Wellbeing Resources: </span>
                      <span>
                        Curated mental health content and resources to support clients between therapy sessions.
                      </span>
                    </div>
                    <div>
                      <span className='text-foreground font-medium'>🤝 Help Someone Heal: </span>
                      <span>
                        Initiative to increase access to therapy for those who need it most.
                      </span>
                    </div>
                  </div>

                  <div className='flex items-center gap-3'>
                    <Badge variant='outline' asChild>
                      <Link href='#' target='_blank' className='gap-1.5 px-3.5 py-2 !text-sm'>
                        <img src='/images/project/image-13.webp' alt='figma' className='h-5' />
                        Figma
                      </Link>
                    </Badge>
                    <Badge variant='outline' asChild>
                      <Link href='#' target='_blank' className='gap-1.5 px-3.5 py-2 !text-sm'>
                        <img src='/images/project/image-12.webp' alt='framer' className='h-5 dark:invert' />
                        Framer
                      </Link>
                    </Badge>
                    <Badge variant='outline' asChild>
                      <Link href='#' target='_blank' className='px-3.5 py-2'>
                        <img src='/images/project/image-11.webp' alt='canva' className='h-5' />
                      </Link>
                    </Badge>
                  </div>
                </AnimatedChevronsAccordionContent>
              </AnimatedChevronsAccordionItem>

              {/* Flyonui */}
              <AnimatedChevronsAccordionItem value='flyonui'>
                <AnimatedChevronsAccordionTrigger className='focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 cursor-pointer items-center justify-between gap-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 data-[state=open]:border-b'>
                  <span className='flex items-center'>
                    <img src='/images/project/image-09.webp' alt='flyonui' className='m-8 size-10' />
                    <div className='flex flex-col gap-1.5 border-l px-2.5 py-5 text-xl'>
                      <span className='font-semibold'>Neoteric</span>
                      <div className='text-muted-foreground flex items-center gap-3 font-normal'>
                        <span>5 Months</span>
                        <Separator
                          orientation='vertical'
                          className='bg-muted-foreground data-[orientation=vertical]:h-4 data-[orientation=vertical]:w-0.5 max-sm:hidden'
                        />
                        <span className='max-sm:hidden'>Aug 2024 - Jan 2025</span>
                      </div>
                    </div>
                  </span>
                </AnimatedChevronsAccordionTrigger>
                <AnimatedChevronsAccordionContent className='text-muted-foreground space-y-6 px-8 py-5 text-base'>
                  <p>
                    Designed and developed Neoteric's digital platform from concept to launch. We handled the
                    full product lifecycle including brand identity, UX/UI design, front-end development,
                    and backend architecture to deliver a modern, scalable product that stands out in the market.
                  </p>

                  {/* Features */}
                  <div className='flex flex-col gap-5'>
                    <div>
                      <span className='text-foreground font-medium'>🎨 Brand Identity: </span>
                      <span>
                        Complete brand strategy and visual identity system designed from the ground up.
                      </span>
                    </div>
                    <div>
                      <span className='text-foreground font-medium'>💻 Full-Stack Development: </span>
                      <span>
                        Modern web application built with scalable architecture and responsive design.
                      </span>
                    </div>
                    <div>
                      <span className='text-foreground font-medium'>🎯 UX/UI Design: </span>
                      <span>
                        User-centered design process with research, prototyping, and iterative testing.
                      </span>
                    </div>
                    <div>
                      <span className='text-foreground font-medium'>🚀 Launch Strategy: </span>
                      <span>End-to-end product launch support from development to deployment.</span>
                    </div>
                  </div>

                  <div className='flex items-center gap-3'>
                    <Badge variant='outline' asChild>
                      <Link href='#' target='_blank' className='gap-1.5 px-3.5 py-2 !text-sm'>
                        <img src='/images/project/image-13.webp' alt='figma' className='h-5' />
                        Figma
                      </Link>
                    </Badge>
                    <Badge variant='outline' asChild>
                      <Link href='#' target='_blank' className='gap-1.5 px-3.5 py-2 !text-sm'>
                        <img src='/images/project/image-12.webp' alt='framer' className='h-5 dark:invert' />
                        Framer
                      </Link>
                    </Badge>
                    <Badge variant='outline' asChild>
                      <Link href='#' target='_blank' className='px-3.5 py-2'>
                        <img src='/images/project/image-11.webp' alt='canva' className='h-5' />
                      </Link>
                    </Badge>
                  </div>
                </AnimatedChevronsAccordionContent>
              </AnimatedChevronsAccordionItem>

              {/* Jetship */}
              <AnimatedChevronsAccordionItem value='jetship'>
                <AnimatedChevronsAccordionTrigger className='focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 cursor-pointer items-center justify-between gap-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 data-[state=open]:border-b'>
                  <span className='flex items-center'>
                    <img src='/images/project/image-08.webp' alt='jetship' className='m-8 size-10' />
                    <div className='flex flex-col gap-1.5 border-l px-2.5 py-5 text-xl'>
                      <span className='font-semibold'>PitchtoVC</span>
                      <div className='text-muted-foreground flex items-center gap-3 font-normal'>
                        <span>6 Months</span>
                        <Separator
                          orientation='vertical'
                          className='bg-muted-foreground data-[orientation=vertical]:h-4 data-[orientation=vertical]:w-0.5 max-sm:hidden'
                        />
                        <span className='max-sm:hidden'>Mar 2024 - Sep 2024</span>
                      </div>
                    </div>
                  </span>
                </AnimatedChevronsAccordionTrigger>

                <AnimatedChevronsAccordionContent className='text-muted-foreground space-y-6 px-8 py-5 text-base'>
                  <p>
                    Built PitchtoVC, a platform helping founders craft compelling pitch decks and connect
                    with venture capitalists. We designed the full user experience, developed the web application,
                    and implemented tools that help startups refine their narratives and present their vision
                    effectively to investors.
                  </p>

                  {/* Features */}
                  <div className='flex flex-col gap-5'>
                    <div>
                      <span className='text-foreground font-medium'>📊 Pitch Deck Builder: </span>
                      <span>
                        Intuitive tools for founders to create, refine, and polish investor-ready pitch decks.
                      </span>
                    </div>
                    <div>
                      <span className='text-foreground font-medium'>🤝 VC Matching: </span>
                      <span>Connecting startups with relevant venture capitalists based on industry and stage.</span>
                    </div>
                    <div>
                      <span className='text-foreground font-medium'>💡 Narrative Coaching: </span>
                      <span>
                        Guided workflows to help founders structure their story and highlight key metrics.
                      </span>
                    </div>
                    <div>
                      <span className='text-foreground font-medium'>🚀 Investor Dashboard: </span>
                      <span>
                        Clean interface for VCs to discover, review, and track promising startups.
                      </span>
                    </div>
                  </div>

                  <div className='flex items-center gap-3'>
                    <Badge variant='outline' asChild>
                      <Link href='#' target='_blank' className='gap-1.5 px-3.5 py-2 !text-sm'>
                        <img src='/images/project/image-13.webp' alt='figma' className='h-5' />
                        Figma
                      </Link>
                    </Badge>
                    <Badge variant='outline' asChild>
                      <Link href='#' target='_blank' className='gap-1.5 px-3.5 py-2 !text-sm'>
                        <img src='/images/project/image-12.webp' alt='framer' className='h-5 dark:invert' />
                        Framer
                      </Link>
                    </Badge>
                    <Badge variant='outline' asChild>
                      <Link href='#' target='_blank' className='px-3.5 py-2'>
                        <img src='/images/project/image-11.webp' alt='canva' className='h-5' />
                      </Link>
                    </Badge>
                  </div>
                </AnimatedChevronsAccordionContent>
              </AnimatedChevronsAccordionItem>

              {/* ThemeSelection */}
              <AnimatedChevronsAccordionItem value='themeselection'>
                <AnimatedChevronsAccordionTrigger className='focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 cursor-pointer items-center justify-between gap-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 data-[state=open]:border-b'>
                  <span className='flex items-center'>
                    <img src='/images/project/image-07.webp' alt='themeselection' className='m-8 size-10' />
                    <div className='flex flex-col gap-1.5 border-l px-2.5 py-5 text-xl'>
                      <span className='font-semibold'>Kundra</span>
                      <div className='text-muted-foreground flex items-center gap-3 font-normal'>
                        <span>8 Months</span>
                        <Separator
                          orientation='vertical'
                          className='bg-muted-foreground data-[orientation=vertical]:h-4 data-[orientation=vertical]:w-0.5 max-sm:hidden'
                        />
                        <span className='max-sm:hidden'>Sep 2023 - May 2024</span>
                      </div>
                    </div>
                  </span>
                </AnimatedChevronsAccordionTrigger>
                <AnimatedChevronsAccordionContent className='text-muted-foreground space-y-6 px-8 py-5 text-base'>
                  <p>
                    Built Kundra's platform to help businesses anticipate and manage the operational impacts
                    of parental leave. We designed and developed the full solution: secure handover workflows,
                    objective protection planning, and team workload management — ensuring business continuity
                    without overburdening teams.
                  </p>

                  {/* Features */}
                  <div className='flex flex-col gap-5'>
                    <div>
                      <span className='text-foreground font-medium'>📋 Handover Workflows: </span>
                      <span>
                        Structured processes ensuring smooth knowledge transfer and responsibility delegation before leave.
                      </span>
                    </div>

                    <div>
                      <span className='text-foreground font-medium'>🎯 Objective Protection: </span>
                      <span>
                        Tools to map business objectives at risk and create mitigation plans well in advance.
                      </span>
                    </div>

                    <div>
                      <span className='text-foreground font-medium'>👥 Team Workload Management: </span>
                      <span>Smart redistribution planning to prevent team overload during parental leave periods.</span>
                    </div>

                    <div>
                      <span className='text-foreground font-medium'>📊 Impact Dashboard: </span>
                      <span>Clear visibility into operational impact and readiness status for managers and HR teams.</span>
                    </div>
                  </div>

                  <div className='flex items-center gap-3'>
                    <Badge variant='outline' asChild>
                      <Link href='#' target='_blank' className='gap-1.5 px-3.5 py-2 !text-sm'>
                        <img src='/images/project/image-13.webp' alt='figma' className='h-5' />
                        Figma
                      </Link>
                    </Badge>
                    <Badge variant='outline' asChild>
                      <Link href='#' target='_blank' className='gap-1.5 px-3.5 py-2 !text-sm'>
                        <img src='/images/project/image-12.webp' alt='framer' className='h-5 dark:invert' />
                        Framer
                      </Link>
                    </Badge>
                    <Badge variant='outline' asChild>
                      <Link href='#' target='_blank' className='px-3.5 py-2'>
                        <img src='/images/project/image-11.webp' alt='canva' className='h-5' />
                      </Link>
                    </Badge>
                  </div>
                </AnimatedChevronsAccordionContent>
              </AnimatedChevronsAccordionItem>

              <CollapsibleContent className='data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden transition-all duration-300'>
                {/* Google */}
                <AnimatedChevronsAccordionItem value='google'>
                  <AnimatedChevronsAccordionTrigger className='focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 cursor-pointer items-center justify-between gap-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 data-[state=open]:border-b'>
                    <span className='flex items-center'>
                      <img src='/images/brand-logo/google-icon.webp' alt='google' className='m-8 size-10' />
                      <div className='flex flex-col gap-1.5 border-l px-2.5 py-5 text-xl'>
                        <span className='font-semibold'>Enterprise SaaS Platform</span>
                        <div className='text-muted-foreground flex items-center gap-3 font-normal'>
                          <span>7 Months</span>
                          <Separator
                            orientation='vertical'
                            className='bg-muted-foreground data-[orientation=vertical]:h-4 data-[orientation=vertical]:w-0.5 max-sm:hidden'
                          />
                          <span className='max-sm:hidden'>Jan 2023 - Aug 2023</span>
                        </div>
                      </div>
                    </span>
                  </AnimatedChevronsAccordionTrigger>
                  <AnimatedChevronsAccordionContent className='text-muted-foreground space-y-6 px-8 py-5 text-base'>
                    <p>
                      Built a multi-tenant SaaS platform for an enterprise client, handling product strategy,
                      UX design, full-stack development, and AI-powered automation features. The platform serves
                      500+ enterprise customers with role-based workspaces, automated reporting, and intelligent
                      workflow orchestration powered by custom LLM integrations.
                    </p>

                    {/* Features */}
                    <div className='flex flex-col gap-5'>
                      <div>
                        <span className='text-foreground font-medium'>🏢 Multi-Tenant Architecture: </span>
                        <span>
                          Isolated tenant workspaces with shared infrastructure, supporting 500+ enterprise
                          customers at scale.
                        </span>
                      </div>
                      <div>
                        <span className='text-foreground font-medium'>🤖 AI Workflow Automation: </span>
                        <span>
                          LLM-powered workflow builder that automates repetitive business processes with
                          natural language configuration.
                        </span>
                      </div>
                      <div>
                        <span className='text-foreground font-medium'>📋 Product Strategy: </span>
                        <span>
                          End-to-end product roadmap definition, feature prioritization, and go-to-market
                          strategy alignment.
                        </span>
                      </div>
                      <div>
                        <span className='text-foreground font-medium'>🔄 CI/CD & DevOps: </span>
                        <span>
                          Automated deployment pipelines, infrastructure-as-code, and monitoring dashboards
                          for operational excellence.
                        </span>
                      </div>
                    </div>

                    <div className='flex items-center gap-3'>
                      <Badge variant='outline' asChild>
                        <Link href='#' target='_blank' className='gap-1.5 px-3.5 py-2 !text-sm'>
                          <img src='/images/project/image-13.webp' alt='figma' className='h-5' />
                          Figma
                        </Link>
                      </Badge>
                      <Badge variant='outline' asChild>
                        <Link href='#' target='_blank' className='gap-1.5 px-3.5 py-2 !text-sm'>
                          <img src='/images/project/image-12.webp' alt='framer' className='h-5 dark:invert' />
                          Framer
                        </Link>
                      </Badge>
                      <Badge variant='outline' asChild>
                        <Link href='#' target='_blank' className='px-3.5 py-2'>
                          <img src='/images/project/image-11.webp' alt='canva' className='h-5' />
                        </Link>
                      </Badge>
                    </div>
                  </AnimatedChevronsAccordionContent>
                </AnimatedChevronsAccordionItem>

                {/* Windows */}
                <AnimatedChevronsAccordionItem value='microsoft'>
                  <AnimatedChevronsAccordionTrigger className='focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 cursor-pointer items-center justify-between gap-4 border-b text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50'>
                    <span className='flex items-center'>
                      <img src='/images/brand-logo/microsoft-icon.webp' alt='microsoft' className='m-8 size-10' />
                      <div className='flex flex-col gap-1.5 border-l px-2.5 py-5 text-xl'>
                        <span className='font-semibold'>Supply Chain Intelligence</span>
                        <div className='text-muted-foreground flex items-center gap-3 font-normal'>
                          <span>9 Months</span>
                          <Separator
                            orientation='vertical'
                            className='bg-muted-foreground data-[orientation=vertical]:h-4 data-[orientation=vertical]:w-0.5 max-sm:hidden'
                          />
                          <span className='max-sm:hidden'>Mar 2022 - Dec 2022</span>
                        </div>
                      </div>
                    </span>
                  </AnimatedChevronsAccordionTrigger>
                  <AnimatedChevronsAccordionContent className='text-muted-foreground space-y-6 border-b px-8 py-5 text-base'>
                    <p>
                      Designed and built a supply chain intelligence platform for a logistics enterprise. We handled
                      the full scope: product strategy workshops, UX design for complex operational dashboards,
                      a React front-end, Python-based predictive models for demand forecasting, and real-time
                      data pipelines processing shipment telemetry from IoT sensors across 200+ warehouses.
                    </p>

                    {/* Features */}
                    <div className='flex flex-col gap-5'>
                      <div>
                        <span className='text-foreground font-medium'>🚚 Demand Forecasting: </span>
                        <span>
                          ML models predicting demand patterns with 92% accuracy, reducing overstock costs
                          by 28%.
                        </span>
                      </div>

                      <div>
                        <span className='text-foreground font-medium'>📡 IoT Data Integration: </span>
                        <span>
                          Real-time telemetry from 200+ warehouse sensors feeding into streaming data
                          pipelines.
                        </span>
                      </div>

                      <div>
                        <span className='text-foreground font-medium'>📊 Operational Dashboards: </span>
                        <span>
                          Complex data visualizations designed for warehouse managers and C-suite stakeholders
                          alike.
                        </span>
                      </div>

                      <div>
                        <span className='text-foreground font-medium'>🔗 ERP Integration: </span>
                        <span>
                          Seamless integration with SAP and Oracle ERP systems via custom middleware and
                          API adapters.
                        </span>
                      </div>
                    </div>

                    <div className='flex items-center gap-3'>
                      <Badge variant='outline' asChild>
                        <Link href='#' target='_blank' className='gap-1.5 px-3.5 py-2 !text-sm'>
                          <img src='/images/project/image-13.webp' alt='figma' className='h-5' />
                          Figma
                        </Link>
                      </Badge>
                      <Badge variant='outline' asChild>
                        <Link href='#' target='_blank' className='gap-1.5 px-3.5 py-2 !text-sm'>
                          <img src='/images/project/image-12.webp' alt='framer' className='h-5 dark:invert' />
                          Framer
                        </Link>
                      </Badge>
                      <Badge variant='outline' asChild>
                        <Link href='#' target='_blank' className='px-3.5 py-2'>
                          <img src='/images/project/image-11.webp' alt='canva' className='h-5' />
                        </Link>
                      </Badge>
                    </div>
                  </AnimatedChevronsAccordionContent>
                </AnimatedChevronsAccordionItem>
              </CollapsibleContent>
            </AnimatedChevronsAccordionRoot>

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

export default Projects
