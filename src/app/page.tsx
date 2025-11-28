import { type Metadata } from 'next'
import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { Testimonial } from '@/components/Testimonial'
import logoMeta from '@/images/meta_logo.svg'
import logoNvidia from '@/images/nvidia_logo.svg'
import logoGoogle from '@/images/google_logo.svg'
import imageGuinness from '@/images/guinness.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'
import { Masthead } from '@/components/Masthead'
import Faqs from '@/components/Faqs'
import logoEdt from '@/images/sponsors/edt.svg'
import logoExtraordinary from '@/images/sponsors/extraordinary.svg'
import logoFynd from '@/images/sponsors/fynd.svg'
import logoHorizon from '@/images/sponsors/horizon.svg'
import logoIdfc from '@/images/sponsors/idfc.svg'
import logoLiverpool from '@/images/sponsors/liverpool.svg'
import logoNanda from '@/images/sponsors/nanda.svg'
import logoNeysa from '@/images/sponsors/neysa.svg'
import logoPixeldust from '@/images/sponsors/pixeldust.png'
import logoQuantiphi from '@/images/sponsors/quantiphi.svg'
import logoTss from '@/images/sponsors/tss.svg'
import logoVeefly from '@/images/sponsors/veefly-logo.webp'
import logoYork from '@/images/sponsors/york.svg'
import floorPlan from '@/images/floor_plan.png'

function Clients()
{
    return (
        <div className="bg-white mt-16 lg:mt-32 py-16 lg:py-24">
            <Container>
                <FadeInStagger className='flex flex-col' faster>

                    <FadeIn className='justify-center items-center gap-x-8 gap-y-10 grid grid-cols-2 lg:grid-cols-4 mt-0 lg:mt-4'>
                        <div className='flex flex-col text-center'>
                            <Image src={logoIdfc} alt="" className='mx-auto w-auto h-32' unoptimized />
                            <span>Banking Partner</span>
                        </div>
                        <div className='flex flex-col text-center'>
                            <Image src={logoEdt} alt="" className='mx-auto w-auto h-32' unoptimized />
                            <span>Gifting Partner</span>
                        </div>
                        <div className='flex flex-col text-center'>
                            <Image src={logoLiverpool} alt="" className='mx-auto w-auto h-28' unoptimized />
                            <span>University Partner</span>
                        </div>
                        <div className='flex flex-col text-center'>
                            <Image src={logoYork} alt="" className='mx-auto w-auto h-28' unoptimized />
                            <span>University Partner</span>
                        </div>
                    </FadeIn>

                    <FadeIn className='justify-center items-center gap-x-1 gap-y-16 grid grid-cols-2 lg:grid-cols-3 mt-16 lg:mt-24'>
                        <Image src={logoExtraordinary} alt="" className='mx-auto w-auto h-24' unoptimized />
                        <Image src={logoFynd} alt="" className='mx-auto w-auto h-24' unoptimized />
                        <Image src={logoHorizon} alt="" className='mx-auto w-auto h-24' unoptimized />
                        <Image src={logoNanda} alt="" className='mx-auto w-auto h-24' unoptimized />
                        <Image src={logoNeysa} alt="" className='mx-auto w-auto h-24' unoptimized />
                        <Image src={logoPixeldust} alt="" className='mx-auto w-auto h-24' unoptimized />
                        <Image src={logoTss} alt="" className='mx-auto w-auto h-24' unoptimized />
                        <Image src={logoQuantiphi} alt="" className='mx-auto w-auto h-24' unoptimized />
                        <Image src={logoVeefly} alt="" className='mx-auto w-auto h-12' unoptimized />
                    </FadeIn>

                </FadeInStagger>
            </Container>
        </div>
    )
}

function Timelines()
{
    return (
        <>
            <SectionIntro
                title="Outline of MumbaiHacks 2025"
                className="mt-24 sm:mt-32 lg:mt-40 cursor-default"
            >
                <ul className='flex flex-col gap-y-4 px-6 list-disc'>
                    <li>
                        <p>
                            <span className='font-bold'>Apply Online.</span> Submit your chosen track, problem statement, a one-paragraph description of your solution, and the technologies you&apos;ll use - especially how you&apos;ll leverage Agentic AI.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span className='font-bold'>Shortlisting.</span> Top teams will be shortlisted virtually.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span className='font-bold'>In-Person Hackathon.</span> Finalists compete in Mumbai - where ideas become working prototypes.
                        </p>
                    </li>
                </ul>
            </SectionIntro>
            <Container className="mt-16 cursor-default">
                <FadeInStagger className="lg:hidden flex w-full">
                    <FadeIn className="flex w-full">
                        <div aria-hidden="true" className="flex flex-row gap-x-12 mt-6 px-8 w-full">
                            <div className="bg-gray-200 rounded-full h-full overflow-hidden">
                                <div style={{ height: '63%' }} className="bg-gray-900 bg-gradient-to-b from-[#12ACFB] to-[#67DD4D] rounded-full w-2" />
                            </div>
                            <div className="gap-y-8 grid grid-rows-4 my-6 text-gray-800 text-sm">
                                <div className="flex flex-col">
                                    <span className='font-semibold'>Register to participate</span>
                                    <span className='mt-1 text-gray-500 text-sm'>July 1st to October 17th</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className='font-semibold'>Submit your solution on Devfolio</span>
                                    <span className='mt-1 text-gray-500 text-sm'>August 13th to October 17th</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className='font-semibold'>Wave 1 and 2 out</span>
                                    <span className='mt-1 text-gray-500 text-sm'>Stay tuned for Wave 3</span>
                                </div>
                                <div className="flex flex-col opacity-60">
                                    <span className='font-semibold'>Round 2, in-person</span>
                                    <span className='mt-1 text-gray-500 text-sm'>November 28th and 29th </span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </FadeInStagger>
                <FadeInStagger className="hidden lg:flex w-full">
                    <FadeIn className="flex w-full">
                        <div aria-hidden="true" className="mt-6 w-full">
                            <div className="bg-gray-200 rounded-full overflow-hidden">
                                <div className="bg-gray-900 bg-gradient-to-r from-[#12ACFB] to-[#67DD4D] rounded-full h-2" style={{ width: '63%' }} />

                            </div>
                            <div className="grid grid-cols-4 mt-6 font-medium text-gray-800 text-sm">

                                <div className="flex flex-col text-left">
                                    <span className='font-semibold'>Register to participate</span>
                                    <span className='mt-1 text-gray-500 text-sm'>July 1st to October 17th</span>
                                </div>
                                <div className="flex flex-col text-center">
                                    <span className='font-semibold'>Submit your solution on Devfolio</span>
                                    <span className='mt-1 text-gray-500 text-sm'>August 13th to October 17th</span>
                                </div>
                                <div className="flex flex-col text-center">
                                    <span className='font-semibold'>Wave 1 and 2 out</span>
                                    <span className='mt-1 text-gray-500 text-sm'>Stay tuned for Wave 3</span>
                                </div>
                                <div className="flex flex-col opacity-50 text-right">
                                    <span className='font-semibold'>Round 2, in-person</span>
                                    <span className='mt-1 text-gray-500 text-sm'>November 28th and 29th</span>
                                </div>

                            </div>
                        </div>
                    </FadeIn>
                </FadeInStagger>
            </Container>
        </>
    )
}

function CaseStudies({ caseStudies, }: { caseStudies: Array<MDXEntry<CaseStudy>> })
{
    return (
        <>
            <SectionIntro
                title="Tracks at MumbaiHacks 2025"
                className="mt-24 sm:mt-32 lg:mt-40 cursor-default"
            >
                <div className='flex flex-col gap-y-2'>
                    <span className=''>Select a track, and choose one option:</span>
                    <ul className='flex flex-col gap-y-2 px-6 list-disc'>
                        <li className='text-neutral-600'>
                            <span className='block font-semibold text-neutral-900'>Tackle our problem statement, or</span>
                            <span className='block text-base'>Handpicked to challenge and inspire you.</span>
                        </li>
                        <li className='text-neutral-600'>
                            <span className='block font-semibold text-neutral-900'>Bring your own problem in the specific track</span>
                            <span className='block text-base'>And blow us away with your creativity.</span>
                        </li>
                    </ul>

                </div>
            </SectionIntro>
            <Container className="mt-16">
                <FadeInStagger className="gap-8 grid grid-cols-1 lg:grid-cols-3">
                    <FadeIn className="flex">
                        <article className="relative flex flex-col hover:bg-neutral-50 p-6 sm:p-8 rounded-3xl ring-1 ring-neutral-950/15 w-full transition">
                            <h3>
                            </h3>
                            <p className="flex gap-x-2 mt-6 text-base">
                                <span className='text-neutral-500'>Track 1</span>
                                <span className="text-neutral-500" aria-hidden="true">
                                    /
                                </span>
                                <span className='font-semibold text-neutral-950'>Fintech</span>
                            </p>
                            <div>
                                <p className="mt-6 font-display font-semibold text-neutral-950 text-base">
                                    Problem Statement 1
                                </p>
                                <p className="mt-1 text-neutral-600 text-base">
                                    Build an autonomous financial coaching agent that adapts to real user behavior, spending patterns, and income variability - helping gig workers, informal sector employees, and everyday citizens make smarter financial decisions proactively.
                                </p>
                            </div>
                            <div>
                                <p className="mt-6 font-display font-semibold text-neutral-950 text-base">
                                    Problem Statement 2
                                </p>
                                <p className="mt-1 text-neutral-600 text-base">
                                    Bring your own problem in Fintech, leveraging Agentic AI.
                                </p>
                            </div>
                        </article>
                    </FadeIn>
                    <FadeIn className="flex">
                        <article className="relative flex flex-col hover:bg-neutral-50 p-6 sm:p-8 rounded-3xl ring-1 ring-neutral-950/15 w-full transition">
                            <h3>
                                <div>
                                    <span className="absolute inset-0 rounded-3xl" />
                                </div>
                            </h3>
                            <p className="flex gap-x-2 mt-6 text-base">
                                <span className='text-neutral-500'>Track 2</span>
                                <span className="text-neutral-500" aria-hidden="true">
                                    /
                                </span>
                                <span className='font-semibold text-neutral-950'>Healthtech</span>
                            </p>
                            <div>
                                <p className="mt-6 font-display font-semibold text-neutral-950 text-base">
                                    Problem Statement 1
                                </p>
                                <p className="mt-1 text-neutral-600 text-base">
                                    Manage unpredictable surges in patients during festivals, pollution spikes, or epidemics with an AI agent that autonomously analyzes data and recommends staffing, supply, and patient advisory actions in advance.
                                </p>
                            </div>
                            <div>
                                <p className="mt-6 font-display font-semibold text-neutral-950 text-base">
                                    Problem Statement 2
                                </p>
                                <p className="mt-1 text-neutral-600 text-base">
                                    Bring your own problem in Healthtech, leveraging Agentic AI.
                                </p>
                            </div>
                        </article>
                    </FadeIn>
                    <FadeIn className="flex">
                        <article className="relative flex flex-col hover:bg-neutral-50 p-6 sm:p-8 rounded-3xl ring-1 ring-neutral-950/15 w-full transition">
                            <h3>
                                <div>
                                    <span className="absolute inset-0 rounded-3xl" />
                                </div>
                            </h3>
                            <p className="flex gap-x-2 mt-6 text-base">
                                <span className='text-neutral-500'>Track 3</span>
                                <span className="text-neutral-500" aria-hidden="true">
                                    /
                                </span>
                                <span className='font-semibold text-neutral-950'>Misinformation</span>
                            </p>
                            <div>
                                <p className="mt-6 font-display font-semibold text-neutral-950 text-base">
                                    Problem Statement 1
                                </p>
                                <p className="mt-1 text-neutral-600 text-base">
                                    Create an Agentic AI system that continuously scans multiple sources of information, detects emerging misinformation, verifies facts, and provides easy-to-understand, contextual updates to the public during crises.
                                </p>
                            </div>
                            <div>
                                <p className="mt-6 font-display font-semibold text-neutral-950 text-base">
                                    Problem Statement 2
                                </p>
                                <p className="mt-1 text-neutral-600 text-base">
                                    Bring your own problem in Misinformation, leveraging Agentic AI.
                                </p>
                            </div>
                        </article>
                    </FadeIn>
                </FadeInStagger>
            </Container>
        </>
    )
}

function LinkCards()
{
    return (
        <>
            <Container className="mt-12 lg:mt-24">
                <FadeInStagger className="gap-8 grid grid-cols-1 lg:grid-cols-3">
                    <FadeIn className="flex">
                        <article className="relative flex flex-col bg-white hover:bg-neutral-50 p-6 sm:p-8 rounded-3xl ring-1 ring-neutral-950/15 w-full transition">
                            <h3 className='font-display font-semibold text-neutral-950 text-2xl'>
                                Partner Resources
                            </h3>
                            <div className='flex flex-col gap-y-4 mt-6'>
                                <a href='https://forms.gle/B2gThxUWv3DrTLFe9' target='_blank' className='font-display font-semibold text-neutral-950 hover:text-neutral-500 lg:text-base text-lg transition-colors duration-300'>
                                    OpenAI Credits
                                </a>
                                <a href='https://forms.gle/67SWDcm1CQL1ajx4A' target='_blank' className='font-display font-semibold text-neutral-950 hover:text-neutral-500 lg:text-base text-lg transition-colors duration-300'>
                                    Neysa + Pipeshift
                                </a>
                                <a href='https://horizonos.in/' target='_blank' className='font-display font-semibold text-neutral-950 hover:text-neutral-500 lg:text-base text-lg transition-colors duration-300'>
                                    Horizon
                                </a>
                                <a href='https://mumbaihacks.projectnanda.org/' target='_blank' className='font-display font-semibold text-neutral-950 hover:text-neutral-500 lg:text-base text-lg transition-colors duration-300'>
                                    Project Nanda
                                </a>
                            </div>
                        </article>
                    </FadeIn>
                    <FadeIn className="flex">
                        <article className="relative flex flex-col bg-white hover:bg-neutral-50 p-6 sm:p-8 rounded-3xl ring-1 ring-neutral-950/15 w-full transition">
                            <h3 className='font-display font-semibold text-neutral-950 text-2xl'>
                                Build and Submission
                            </h3>
                            <div className='flex flex-col gap-y-4 mt-6'>
                                <a href='https://mumbaihacks.com/mentorship' target='_blank' className='font-display font-semibold text-neutral-950 hover:text-neutral-500 lg:text-base text-lg transition-colors duration-300'>
                                    Request a Mentor
                                </a>
                                <a href='https://docs.google.com/presentation/d/1pPclSSu0DNVrl6flU1yFYNFrDCGfQuMqKrwujRJl7DI/edit?usp=sharing' target='_blank' className='font-display font-semibold text-neutral-950 hover:text-neutral-500 lg:text-base text-lg transition-colors duration-300'>
                                    Presentation Template
                                </a>
                                <a href='https://forms.gle/AkK2MobuvYuhfHmu9' target='_blank' className='font-display font-semibold text-neutral-950 hover:text-neutral-500 lg:text-base text-lg transition-colors duration-300'>
                                    Submission Form
                                </a>
                                <a href='https://docs.google.com/document/d/1scEZsEWMRK0sm2u1JlUhAskGQ5J0EC5ZXm5TtJubick/edit?usp=sharing' target='_blank' className='font-display font-semibold text-neutral-950 hover:text-neutral-500 lg:text-base text-lg transition-colors duration-300'>
                                    Build Rules
                                </a>
                            </div>
                        </article>
                    </FadeIn>
                    <FadeIn className="flex">
                        <article className="relative flex flex-col bg-white hover:bg-neutral-50 p-6 sm:p-8 rounded-3xl ring-1 ring-neutral-950/15 w-full transition">
                            <h3 className='font-display font-semibold text-neutral-950 text-2xl'>
                                Hackathon Help
                            </h3>
                            <div className='flex flex-col gap-y-4 mt-6'>
                                <a href='https://docs.google.com/document/d/1QgEsxP_6ekHjR9CSlcOAiS1OdDVqdjPLHkWJdFWi92k/edit?usp=sharing' className='font-display font-semibold text-neutral-950 hover:text-neutral-500 lg:text-base text-lg transition-colors duration-300'>
                                    Code of Conduct
                                </a>
                                <a href='https://docs.google.com/document/d/1TG_JIbWDmOU5dO7b--FyGM3FhPlN1onjUcjB6xUQvR4/edit?usp=sharing' className='font-display font-semibold text-neutral-950 hover:text-neutral-500 lg:text-base text-lg transition-colors duration-300'>
                                    FAQs
                                </a>
                                <a href='mailto:hi@mumbaihacks.com' className='font-display font-semibold text-neutral-950 hover:text-neutral-500 lg:text-base text-lg transition-colors duration-300'>
                                    Contact the Team
                                </a>
                            </div>
                        </article>
                    </FadeIn>
                </FadeInStagger>
            </Container>
        </>
    )
}

export const metadata: Metadata = {
    description:
        'MumbaiHacks is the largest hackathon in India, bringing together developers, designers, and innovators to build amazing projects in just 24 hours.',
}

export default async function Home()
{
    let caseStudies = (await loadCaseStudies()).slice(0, 3)

    return (
        <RootLayout>

            <Masthead />

            {/* <div className='mx-auto px-6 lg:px-8 w-full max-w-7xl'>
                <Image src={imageGuinness} alt="Guinness World Record" className="mx-auto mt-36 rounded-xl lg:rounded-3xl w-full" unoptimized />
            </div> */}


            {/* <Timelines /> */}

            {/* <CaseStudies caseStudies={caseStudies} /> */}

            <LinkCards />

            <div className='mx-auto px-6 lg:px-8 w-full max-w-7xl'>
                <Image src={floorPlan} alt="Floor Plan" className="mx-auto mt-36 rounded-xl lg:rounded-3xl w-full" unoptimized />
            </div>

            <Clients />

            {/* <div className='mx-auto w-full max-w-7xl'>
                <SectionIntro
                    title="A glimpse of MumbaiHacks 2024"
                    className="mt-24 sm:mt-32 lg:mt-40 cursor-default"
                >
                </SectionIntro>
                <div className='mt-16 px-6 lg:px-8'>
                    <iframe className="mx-auto rounded-xl lg:rounded-3xl w-full aspect-video" src="https://www.youtube.com/embed/wcUki2Bizzg?si=fFy1S_tm9H7KINqJ" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>

            </div> */}

            {/* <Testimonial
                className="mt-24 sm:mt-32 lg:mt-40"
                client={{ name: 'Varun Soni - Winner, MumbaiHacks 2024' }}
            >
                Winning MumbaiHacks 2024 was an incredibly rewarding experience that pushed me to grow both technically and creatively. With over 2,000 developers participating, the competition was intense, bringing together some of the brightest minds in the country to solve real-world challenges.
            </Testimonial> */}

            {/* <ContactSection /> */}

            {/* <Faqs /> */}


        </RootLayout>
    )
}
