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
                      <span className='font-semibold'>AI Health Platform</span>
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
                    Built an end-to-end AI-powered health platform for a telehealth startup. We owned the entire
                    product lifecycle: UX research and patient journey mapping, a React Native mobile app,
                    a Next.js provider dashboard, Python-based ML models for symptom triage, and real-time
                    data pipelines connecting wearable devices to clinical workflows. The platform reduced
                    average diagnosis time by 40% and scaled to handle 50K+ daily active users.
                  </p>

                  <div className='flex flex-col gap-5'>
                    <div>
                      <span className='text-foreground font-medium'>🧠 AI Symptom Triage: </span>
                      <span>
                        Custom NLP models that analyze patient-reported symptoms and surface relevant clinical
                        pathways for providers in real-time.
                      </span>
                    </div>
                    <div>
                      <span className='text-foreground font-medium'>📱 Cross-Platform Apps: </span>
                      <span>
                        React Native patient app and Next.js provider dashboard with shared design system and
                        real-time sync.
                      </span>
                    </div>
                    <div>
                      <span className='text-foreground font-medium'>📊 Data Pipeline: </span>
                      <span>
                        Event-driven architecture ingesting wearable data, transforming it through ML models,
                        and surfacing actionable insights.
                      </span>
                    </div>
                    <div>
                      <span className='text-foreground font-medium'>🔒 HIPAA Compliance: </span>
                      <span>
                        End-to-end encryption, audit logging, and infrastructure design meeting healthcare
                        regulatory requirements.
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
                      <span className='font-semibold'>Finova Analytics</span>
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
                    Designed and built a complete analytics platform for a fintech company. We handled everything
                    from UX design of complex data visualizations to building the real-time data pipelines
                    that power them. The backend processes 10M+ events daily through a streaming architecture,
                    while the Next.js dashboard delivers sub-second query responses with interactive charts
                    and AI-powered anomaly detection.
                  </p>

                  {/* Features */}
                  <div className='flex flex-col gap-5'>
                    <div>
                      <span className='text-foreground font-medium'>📊 Real-Time Dashboards: </span>
                      <span>
                        Interactive data visualizations with drill-down capabilities, built with D3.js and React.
                      </span>
                    </div>
                    <div>
                      <span className='text-foreground font-medium'>🔄 Streaming Data Pipeline: </span>
                      <span>
                        Event-driven architecture processing 10M+ daily events with Kafka, Flink, and PostgreSQL.
                      </span>
                    </div>
                    <div>
                      <span className='text-foreground font-medium'>🤖 AI Anomaly Detection: </span>
                      <span>
                        Custom ML models that flag unusual patterns in financial data and surface alerts automatically.
                      </span>
                    </div>
                    <div>
                      <span className='text-foreground font-medium'>🔐 Enterprise Security: </span>
                      <span>Role-based access control, SOC 2 compliance, and end-to-end audit trails.</span>
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
                      <span className='font-semibold'>Vertex AI Studio</span>
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
                    Built a comprehensive AI content studio for a media company. The platform combines LLM-powered
                    content generation, automated editing workflows, and a publishing pipeline that serves
                    personalized content across web, mobile, and email channels. We designed the UX for complex
                    AI-assisted workflows, built the React front-end, Node.js APIs, and Python ML services,
                    and implemented the data infrastructure for content analytics and personalization.
                  </p>

                  {/* Features */}
                  <div className='flex flex-col gap-5'>
                    <div>
                      <span className='text-foreground font-medium'>✍️ AI Content Generation: </span>
                      <span>
                        LLM-powered writing assistant with brand voice training, tone adjustment, and
                        multi-format output.
                      </span>
                    </div>
                    <div>
                      <span className='text-foreground font-medium'>🔄 Automated Workflows: </span>
                      <span>End-to-end editorial pipeline from draft to review to publish with approval gates.</span>
                    </div>
                    <div>
                      <span className='text-foreground font-medium'>🎯 Personalization Engine: </span>
                      <span>
                        ML-driven content recommendations that adapt based on user behavior and engagement
                        patterns.
                      </span>
                    </div>
                    <div>
                      <span className='text-foreground font-medium'>📈 Content Analytics: </span>
                      <span>
                        Real-time dashboards tracking engagement, conversion, and content performance across
                        all channels.
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
                      <span className='font-semibold'>Meridian Commerce</span>
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
                    Complete platform redesign and re-architecture for a mid-market e-commerce company. We
                    reimagined the shopping experience through UX research, rebuilt the front-end with Next.js
                    for performance, migrated the backend to a microservices architecture, and implemented
                    AI-powered product recommendations that increased average order value by 35%.
                  </p>

                  {/* Features */}
                  <div className='flex flex-col gap-5'>
                    <div>
                      <span className='text-foreground font-medium'>🛍️ UX-Driven Redesign: </span>
                      <span>
                        Complete shopping experience overhaul based on user research, A/B testing, and conversion
                        optimization.
                      </span>
                    </div>

                    <div>
                      <span className='text-foreground font-medium'>⚡ Performance-First Frontend: </span>
                      <span>
                        Next.js storefront with ISR, edge caching, and optimized Core Web Vitals scoring 95+ on Lighthouse.
                      </span>
                    </div>

                    <div>
                      <span className='text-foreground font-medium'>🤖 AI Recommendations: </span>
                      <span>Collaborative filtering and NLP-based product recommendations driving 35% higher AOV.</span>
                    </div>

                    <div>
                      <span className='text-foreground font-medium'>🏗️ Microservices Migration: </span>
                      <span>Monolith-to-microservices migration with zero-downtime deployment and auto-scaling.</span>
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
