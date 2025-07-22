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

function Clients()
{
    return (
        <div className="bg-neutral-950 mt-24 sm:mt-32 lg:mt-32 py-20 sm:py-32">
            <Container>
                <div className="flex items-center gap-x-8">
                    <h2 className="font-display font-semibold text-white text-sm sm:text-left text-center tracking-wider">
                        Partners for previous MumbaiHacks
                    </h2>
                </div>
                <FadeInStagger faster>
                    <FadeIn className='items-center gap-x-1 gap-y-10 grid grid-cols-2 lg:grid-cols-4 mt-10'>
                        <Image src={logoNvidia} alt="Nvidia" className='w-auto h-6' unoptimized />
                        <Image src={logoMeta} alt="Meta" className='w-auto h-6' unoptimized />
                        <Image src={logoGoogle} alt="Google for Developers" className='col-span-2 w-auto h-11' unoptimized />
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
                    This year, MumbaiHacks will be held in two rounds.<br /><br /> <b>Round 1 will be online, from August 12th to 31st.</b> The top teams will then be invited to the final round in Mumbai on October <b>4th and 5th, 2025</b>, a 24-hour hackathon to claim the grand prizes!
                </p>
            </SectionIntro>
            <Container className="mt-16 cursor-default">
                <FadeInStagger className="lg:hidden flex w-full">
                    <FadeIn className="flex w-full">
                        <div aria-hidden="true" className="flex flex-row gap-x-16 mt-6 px-8 w-full">
                            <div className="bg-gray-200 rounded-full overflow-hidden">
                                <div style={{ height: '11%' }} className="bg-gray-900 rounded-full w-2" />
                            </div>
                            <div className="gap-y-8 grid grid-rows-5 my-6 font-medium text-gray-800 text-sm">
                                <div className="flex flex-col font-bold">
                                    <span>Register to participate</span>
                                    {/* <span className='mt-1 text-gray-500 text-sm'>July 1st to August 1st</span> */}
                                </div>
                                <div className="flex flex-col">
                                    <span>Work on your project</span>
                                    {/* <span className='mt-1 text-gray-500 text-sm'>August 1st to 31st</span> */}
                                </div>
                                <div className="flex flex-col">
                                    <span>Evaluations</span>
                                    {/* <span className='mt-1 text-gray-500 text-sm'>September 1st to 10th</span> */}
                                </div>
                                <div className="flex flex-col">
                                    <span>Round 1 Results</span>
                                    {/* <span className='mt-1 text-gray-500 text-sm'>September 11th</span> */}
                                </div>
                                <div className="flex flex-col">
                                    <span>Round 2, in-person</span>
                                    {/* <span className='mt-1 text-gray-500 text-sm'>October 7th</span> */}
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </FadeInStagger>
                <FadeInStagger className="hidden lg:flex w-full">
                    <FadeIn className="flex w-full">
                        <div aria-hidden="true" className="mt-6 w-full">
                            <div className="bg-gray-200 rounded-full overflow-hidden">
                                <div style={{ width: '2%' }} className="bg-gray-900 rounded-full h-2" />
                            </div>
                            <div className="grid grid-cols-5 mt-6 font-medium text-gray-800 text-sm">
                                <div className="flex flex-col font-bold">
                                    <span>Register to participate</span>
                                    {/* <span className='mt-1 text-gray-500 text-sm'>July 1st to August 1st</span> */}
                                </div>
                                <div className="flex flex-col text-center">
                                    <span>Work on your project</span>
                                    {/* <span className='mt-1 text-gray-500 text-sm'>August 1st to 31st</span> */}
                                </div>
                                <div className="flex flex-col text-center">
                                    <span>Evaluations</span>
                                    {/* <span className='mt-1 text-gray-500 text-sm'>September 1st to 10th</span> */}
                                </div>
                                <div className="flex flex-col text-center">
                                    <span>Round 1 Results</span>
                                    {/* <span className='mt-1 text-gray-500 text-sm'>September 11th</span> */}
                                </div>
                                <div className="flex flex-col text-right">
                                    <span>Round 2, in-person</span>
                                    {/* <span className='mt-1 text-gray-500 text-sm'>October 7th</span> */}
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
                <p>
                    To be announced soon!
                </p>
            </SectionIntro>
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

            <div className='mx-auto px-6 lg:px-8 w-full max-w-7xl'>
                <Image src={imageGuinness} alt="Guinness World Record" className="mx-auto mt-36 rounded-xl lg:rounded-3xl w-full" unoptimized />
            </div>

            <Clients />

            <Timelines />

            <CaseStudies caseStudies={caseStudies} />

            <div className='mx-auto w-full max-w-7xl'>
                <SectionIntro
                    title="A glimpse of MumbaiHacks 2024"
                    className="mt-24 sm:mt-32 lg:mt-40 cursor-default"
                >
                </SectionIntro>
                <div className='mt-16 px-6 lg:px-8'>
                    <iframe className="mx-auto rounded-xl lg:rounded-3xl w-full aspect-video" src="https://www.youtube.com/embed/wcUki2Bizzg?si=fFy1S_tm9H7KINqJ" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>

            </div>

            <Testimonial
                className="mt-24 sm:mt-32 lg:mt-40"
                client={{ name: 'Varun Soni - Winner, MumbaiHacks 2024' }}
            >
                Winning the Mumbai Hacks 2024 was an incredibly rewarding experience that pushed me to grow both technically and creatively. With over 2,000 developers participating, the competition was intense, bringing together some of the brightest minds in the country to solve real-world challenges.
            </Testimonial>

            <Faqs />

            <ContactSection />


        </RootLayout>
    )
}
