import type { ExperienceProps } from '@/components/blocks/experience/experience'

export const experienceData: ExperienceProps[] = [
  {
    companyName: 'Enterprise AI Solutions',
    icon: (
      <div className='bg-primary/10 flex size-8 items-center justify-center rounded-md'>
        <svg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M0 3C0 1.34315 1.34315 0 3 0H21V15C21 18.3137 18.3137 21 15 21H0V3Z' fill='black' />
          <rect
            x='13.3657'
            y='10.2407'
            width='3.15'
            height='9.66'
            rx='1.575'
            transform='rotate(60 13.3657 10.2407)'
            fill='white'
          />
          <rect x='14.7312' y='4' width='3.15' height='9.66' rx='1' transform='rotate(60 14.7312 4)' fill='white' />
        </svg>
      </div>
    ),
    items: [
      {
        role: 'AI Product Strategy & Architecture',
        duration: '2025 - Present',
        value: 'ai-product-strategy',
        type: 'Ongoing',
        badges: ['Product Strategy', 'AI Architecture', 'LLM Integration'],
        responsibilities: [
          'Defining AI-first product roadmaps and go-to-market strategies for enterprise clients.',
          'Architecting end-to-end solutions spanning front-end, back-end, and ML pipelines.',
          'Integrating LLMs and custom AI models into existing product ecosystems.',
          'Leading cross-functional teams across design, engineering, and data science.'
        ]
      },
      {
        role: 'Full-Stack Product Development',
        duration: '2024 - 2025',
        value: 'full-stack-dev',
        type: 'Ongoing',
        badges: ['React', 'Next.js', 'Node.js', 'Python'],
        responsibilities: [
          'Building production-grade web applications with React, Next.js, and TypeScript.',
          'Designing and implementing scalable APIs and microservices architectures.',
          'Setting up CI/CD pipelines and cloud infrastructure for seamless deployments.',
          'Delivering pixel-perfect front-ends that match design specifications exactly.'
        ]
      },
      {
        role: 'UX Research & Design Systems',
        duration: '2023 - 2024',
        value: 'ux-design-systems',
        type: 'Ongoing',
        badges: ['UX Research', 'Design Systems', 'Figma'],
        responsibilities: [
          'Conducting user research, usability testing, and competitive analysis.',
          'Building scalable design systems with reusable component libraries.',
          'Creating wireframes, prototypes, and high-fidelity mockups in Figma.',
          'Bridging the gap between design intent and engineering implementation.'
        ]
      }
    ]
  },
  {
    companyName: 'Data & AI Engineering',
    icon: (
      <div className='bg-primary/10 flex size-8 items-center justify-center rounded-md'>
        <svg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <rect width='21' height='21' rx='5' fill='black' />
          <ellipse
            cx='10.0043'
            cy='11.0044'
            rx='8.25208'
            ry='4.48202'
            transform='rotate(-135 10.0043 11.0044)'
            fill='white'
          />
          <line x1='16.3536' y1='8.91459' x2='11.3536' y2='13.9146' stroke='black' />
          <line x1='15.3536' y1='6.91459' x2='9.35355' y2='12.9146' stroke='black' />
          <line x1='15.3536' y1='6.91459' x2='13.3536' y2='8.91459' stroke='white' />
          <line x1='16.3536' y1='8.91459' x2='14.3536' y2='10.9146' stroke='white' />
        </svg>
      </div>
    ),
    items: [
      {
        role: 'Data Pipeline Architecture',
        duration: '2024 - Present',
        value: 'data-pipeline-arch',
        type: 'Ongoing',
        badges: ['ETL', 'Data Warehousing', 'Real-time Streaming'],
        responsibilities: [
          'Designing and building scalable ETL pipelines for large-scale data processing.',
          'Implementing real-time data streaming with event-driven architectures.',
          'Setting up data warehouses and analytics infrastructure for business intelligence.',
          'Optimizing data workflows for cost efficiency and performance.'
        ]
      },
      {
        role: 'ML Model Development & Deployment',
        duration: '2023 - 2024',
        value: 'ml-model-dev',
        type: 'Ongoing',
        badges: ['Python', 'TensorFlow', 'MLOps', 'AWS'],
        responsibilities: [
          'Developing and training custom ML models for classification, prediction, and NLP tasks.',
          'Building MLOps pipelines for model versioning, monitoring, and retraining.',
          'Deploying models at scale with containerized inference services.',
          'Collaborating with product teams to translate business needs into ML solutions.'
        ]
      }
    ]
  },
  {
    companyName: 'Design Strategy',
    showInMore: true,
    icon: (
      <div className='flex size-8 items-center justify-center rounded-md bg-amber-600/10 dark:bg-amber-400/10'>
        <img src='/images/brand-logo/training.png' alt='Design Strategy Logo' className='size-5 object-contain' />
      </div>
    ),
    items: [
      {
        role: 'Brand & Design Strategy Consulting',
        duration: '2022 - 2023',
        value: 'design-strategy',
        type: 'Consulting',
        badges: ['Brand Strategy', 'Design Thinking', 'User Research'],
        responsibilities: [
          'Running design sprints and workshops to align teams on product vision.',
          'Developing brand identity systems and visual design languages.',
          'Conducting competitive audits and market research for positioning.',
          'Advising startups on product-market fit and design-led growth strategies.'
        ]
      }
    ]
  }
]
