import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoMiM from '@/images/logo_mim_dark.svg'
import logoTEAM from '@/images/logo_team_dark.svg'
import imageMasthead from '@/images/masthead.jpg'
import imageFaq from '@/images/faqs.jpg'
import logoMeta from '@/images/meta_logo.svg'
import logoNvidia from '@/images/nvidia_logo.svg'
import logoGoogle from '@/images/google_logo.svg'
import imageGuinness from '@/images/guinness.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'
import { Button } from '@/components/Button'

const clients = [
    ['Nvidia', logoNvidia],
    ['Meta', logoMeta],
    ['Google for Developers', logoGoogle],
]

function Clients()
{
    return (
        <div className="mt-24 bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-32">
            <Container>
                <div className="flex items-center gap-x-8">
                    <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
                        Sponsors for MumbaiHacks 2024
                    </h2>
                </div>
                <FadeInStagger faster>
                    <FadeIn className='grid grid-cols-2 items-center gap-x-1 gap-y-10 lg:grid-cols-4 mt-10'>
                        <Image src={logoNvidia} alt="Nvidia" className='h-6 w-auto' unoptimized />
                        <Image src={logoMeta} alt="Meta" className='h-6 w-auto' unoptimized />
                        <Image src={logoGoogle} alt="Google for Developers" className='h-11 w-auto col-span-2' unoptimized />
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
                <p>
                    This year, MumbaiHacks will be held in two phases: all participants will have until August 31 to submit their projects online, and the top teams will be selected to participate in the final round, which will be held in Mumbai on October 7, 2025.
                </p>
            </SectionIntro>
            <Container className="mt-16 cursor-default">
                <FadeInStagger className="flex lg:hidden w-full">
                    <FadeIn className="flex w-full">
                        <div aria-hidden="true" className="flex flex-row gap-x-16 px-8 mt-6 w-full">
                            <div className="overflow-hidden rounded-full bg-gray-200">
                                <div style={{ height: '11%' }} className="w-2 rounded-full bg-gray-900" />
                            </div>
                            <div className="my-6 grid grid-rows-5 gap-y-8 text-sm font-medium text-gray-800">
                                <div className="flex flex-col font-bold">
                                    <span>Register to participate</span>
                                    <span className='mt-1 text-sm text-gray-500'>July 1st to August 1st</span>
                                </div>
                                <div className="flex flex-col">
                                    <span>Work on your project</span>
                                    <span className='mt-1 text-sm text-gray-500'>August 1st to 31st</span>
                                </div>
                                <div className="flex flex-col">
                                    <span>Evaluations</span>
                                    <span className='mt-1 text-sm text-gray-500'>September 1st to 10th</span>
                                </div>
                                <div className="flex flex-col">
                                    <span>Round 1 Results</span>
                                    <span className='mt-1 text-sm text-gray-500'>September 11th</span>
                                </div>
                                <div className="flex flex-col">
                                    <span>Round 2, in-person</span>
                                    <span className='mt-1 text-sm text-gray-500'>October 7th</span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </FadeInStagger>
                <FadeInStagger className="hidden lg:flex w-full">
                    <FadeIn className="flex w-full">
                        <div aria-hidden="true" className="mt-6 w-full">
                            <div className="overflow-hidden rounded-full bg-gray-200">
                                <div style={{ width: '2%' }} className="h-2 rounded-full bg-gray-900" />
                            </div>
                            <div className="mt-6 grid grid-cols-5 text-sm font-medium text-gray-800">
                                <div className="flex flex-col font-bold">
                                    <span>Register to participate</span>
                                    <span className='mt-1 text-sm text-gray-500'>July 1st to August 1st</span>
                                </div>
                                <div className="flex flex-col text-center">
                                    <span>Work on your project</span>
                                    <span className='mt-1 text-sm text-gray-500'>August 1st to 31st</span>
                                </div>
                                <div className="flex flex-col text-center">
                                    <span>Evaluations</span>
                                    <span className='mt-1 text-sm text-gray-500'>September 1st to 10th</span>
                                </div>
                                <div className="flex flex-col text-center">
                                    <span>Round 1 Results</span>
                                    <span className='mt-1 text-sm text-gray-500'>September 11th</span>
                                </div>
                                <div className="flex flex-col text-right">
                                    <span>Round 2, in-person</span>
                                    <span className='mt-1 text-sm text-gray-500'>October 7th</span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </FadeInStagger>
            </Container>
        </>
    )
}

function CaseStudies({
    caseStudies,
}: {
    caseStudies: Array<MDXEntry<CaseStudy>>
})
{
    return (
        <>
            <SectionIntro
                title="Tracks at MumbaiHacks 2025"
                className="mt-24 sm:mt-32 lg:mt-40 cursor-default"
            >
                <p>
                    Get ready to dive into the exciting tracks we have lined up for
                    MumbaiHacks 2025! Each track is designed to challenge your skills and
                    creativity, pushing you to build innovative solutions that can make a
                    real impact.
                </p>
            </SectionIntro>
            <Container className="mt-16 cursor-default">
                <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <FadeIn className="flex">
                        <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition sm:p-8">
                            <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                                <span>Track 1</span>
                                {/* <span className="text-neutral-300" aria-hidden="true">
                                    /
                                </span> */}
                            </p>
                            <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                                GenAI
                            </p>
                            <p className="mt-4 text-base text-neutral-600">
                                Dive into the world of Generative AI and explore how it can be used to build applications that leverage the power of AI to generate text, images, and more.
                            </p>
                        </article>
                    </FadeIn>
                    <FadeIn className="flex">
                        <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition sm:p-8">
                            <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                                <span>Track 2</span>
                                {/* <span className="text-neutral-300" aria-hidden="true">
                                    /
                                </span> */}
                            </p>
                            <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                                Agentic AI
                            </p>
                            <p className="mt-4 text-base text-neutral-600">
                                Explore the vertical of Agentic AI, where systems act autonomously to solve complex problems, as well as learn, adapt, and make decisions all on their own.
                            </p>
                        </article>
                    </FadeIn>
                    <FadeIn className="flex">
                        <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition sm:p-8">
                            <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                                <span>Track 3</span>
                                {/* <span className="text-neutral-300" aria-hidden="true">
                                    /
                                </span> */}
                            </p>
                            <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                                No limits
                            </p>
                            <p className="mt-4 text-base text-neutral-600">
                                Not building something AI? Use this track to push and build anything you can imagine, from innovative web applications to groundbreaking hardware projects.
                            </p>
                        </article>
                    </FadeIn>
                </FadeInStagger>
            </Container>
        </>
    )
}

function Services()
{
    return (
        <>
            <SectionIntro
                eyebrow="FAQs"
                title="Everything you need to know about this year&apos;s MumbaiHacks"
                className="mt-24 sm:mt-32 lg:mt-40"
            >
                <p>
                    Don&apos;t see your question here? Reach out to us at <a href="mailto:hi@mumbaihacks.com">hi@mumbaihacks.com</a>
                </p>
            </SectionIntro>
            <Container className="mt-16">
                <div className="lg:flex lg:items-center lg:justify-end">
                    <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
                        <FadeIn className="w-135 flex-none lg:w-180">
                            <StylizedImage
                                src={imageFaq}
                                sizes="(min-width: 1024px) 41rem, 31rem"
                                className="justify-center lg:justify-end"
                            />
                        </FadeIn>
                    </div>
                    <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">

                        <ListItem title="What is the format of this year's MumbaiHacks?">
                            MumbaiHacks 2025 will have an online round in the month of August,
                            where participants can submit their projects online.
                            The top teams will be selected to participate in the final round, which will be held in Mumbai on October 7, 2025.
                            The final round will be a 24-hour hackathon where teams will continue building their projects and present them to the judges.
                        </ListItem>
                        <ListItem title="Is the event free to attend">
                            Yes! The event is completely free to attend, and we encourage
                            everyone to sign up and participate. MumbaiHacks has always
                            been a free event, and we want to keep it that way.
                        </ListItem>
                        <ListItem title="Who can participate">
                            MumbaiHacks is open to everyone who loves to build, regardless of their
                            background or experience level. Whether you are a beginner or an
                            experienced hacker, we welcome you to join us and showcase your
                            skills.
                        </ListItem>
                        <ListItem title="What are the prizes">
                            We have some exciting prizes lined up for the winners of MumbaiHacks.
                            The details of the prizes will be announced closer to the event date,
                            so stay tuned!
                        </ListItem>
                    </List>
                </div>
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
            <Container className="mt-16 lg:mt-32">
                <div className="grid grid-cols-5 gap-x-8 gap-y-16 lg:gap-y-0">

                    <FadeIn className="flex flex-col justify-start col-span-5 lg:col-span-3 max-w-3xl pr-0 lg:pr-24 gap-y-8">
                        <div className='flex flex-row items-center gap-x-5'>
                            <Image src={logoTEAM} alt="TEAM" width={100} height={100} className="h-10 w-auto" unoptimized />
                            <span>x</span>
                            <Image src={logoMiM} alt="MumbaiHacks" width={100} height={100} className="h-11 w-auto ml-1" unoptimized />
                        </div>
                        <h1 className="font-display text-5xl lg:text-7xl font-medium text-balance text-neutral-950">
                            Where Innovation Meets Impact
                        </h1>
                        <div className="flex flex-col text-lg text-gray-700 gap-y-4">
                            <p>
                                Join India&apos;s brightest minds to build the future in Mumbai, one line of code at a time. MumbaiHacks is more than a hackathon - it&apos;s a launchpad for innovation, a celebration of creativity, and a community of builders.
                            </p>
                            <div className='flex flex-row items-center gap-x-4'>
                                <svg className='h-6 w-auto' width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 9H21M9 15L11 17L15 13M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p>
                                    August 1 to October 7, 2025
                                </p>
                            </div>
                            <div className='flex flex-row items-center gap-x-4'>
                                <svg className='h-6 w-auto' width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p>
                                    Mumbai
                                </p>
                            </div>
                        </div>
                        <Button className="self-start" href="/hackathon">
                            Sign up now for free
                        </Button>
                    </FadeIn>

                    <div className='col-span-5 hidden lg:block lg:col-span-2 pl-16'>
                        <Image src={imageMasthead} width={100} height={400} alt="" className="-mt-4 w-full h-auto rounded-3xl" unoptimized />
                    </div>
                </div>
            </Container>

            <div className='px-6 lg:px-8 w-full max-w-7xl mx-auto'>
                <Image src={imageGuinness} alt="Guinness World Record" className="mt-36 w-full rounded-xl lg:rounded-3xl mx-auto" unoptimized />
            </div>

            <Clients />

            <Timelines />

            {/* Uncomment the following line to display case studies */}

            {/* <CaseStudies caseStudies={caseStudies} /> */}

            <Services />

            <ContactSection />

            <Testimonial
                className="mt-24 sm:mt-32 lg:mt-40"
                client={{ name: 'Varun - Winner, MumbaiHacks 2024' }}
            >
                Winning the Mumbai Hacks 2024 was an incredibly rewarding experience that pushed me to grow both technically and creatively. With over 2,000 developers participating, the competition was intense, bringing together some of the brightest minds in the country to solve real-world challenges.
            </Testimonial>


        </RootLayout>
    )
}
