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
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'
import { Button } from '@/components/Button'

const clients = [
    ['Phobia', logoPhobiaLight],
    ['Family Fund', logoFamilyFund],
    ['Unseal', logoUnseal],
    ['Mail Smirk', logoMailSmirk],
]

function Clients()
{
    return (
        <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
            <Container>
                <FadeIn className="flex items-center gap-x-8">
                    <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
                        Sponsors for MumbaiHacks 2025
                    </h2>
                    <div className="h-px flex-auto bg-neutral-800" />
                </FadeIn>
                <FadeInStagger faster>
                    <ul
                        role="list"
                        className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
                    >
                        {clients.map(([client, logo]) => (
                            <li key={client}>
                                <FadeIn>
                                    <Image src={logo} alt={client} unoptimized />
                                </FadeIn>
                            </li>
                        ))}
                    </ul>
                </FadeInStagger>
            </Container>
        </div>
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
                className="mt-24 sm:mt-32 lg:mt-40"
            >
                <p>
                    Get ready to dive into the exciting tracks we have lined up for
                    MumbaiHacks 2025! Each track is designed to challenge your skills and
                    creativity, pushing you to build innovative solutions that can make a
                    real impact.
                </p>
            </SectionIntro>
            <Container className="mt-16">
                <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <FadeIn className="flex">
                        <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                            <h3>
                                <Link href="#">
                                    <span className="absolute inset-0 rounded-3xl" />
                                    {/* <Image
                                        src={caseStudy.logo}
                                        alt={caseStudy.client}
                                        className="h-16 w-16"
                                        unoptimized
                                    /> */}
                                </Link>
                            </h3>
                            <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                                <span>Track 1</span>
                                {/* <span className="text-neutral-300" aria-hidden="true">
                                    /
                                </span> */}
                            </p>
                            <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                                Fintech
                            </p>
                            <p className="mt-4 text-base text-neutral-600">
                                Build innovative financial solutions that can transform the way we manage money, invest, and transact. This track is all about leveraging technology to create a more inclusive and efficient financial ecosystem.
                            </p>
                        </article>
                    </FadeIn>
                    <FadeIn className="flex">
                        <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                            <h3>
                                <Link href="#">
                                    <span className="absolute inset-0 rounded-3xl" />
                                    {/* <Image
                                        src={caseStudy.logo}
                                        alt={caseStudy.client}
                                        className="h-16 w-16"
                                        unoptimized
                                    /> */}
                                </Link>
                            </h3>
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
                                Explore the world of Agentic AI, where machines can act autonomously to solve complex problems. This track challenges you to create AI systems that can learn, adapt, and make decisions on their own, paving the way for a more intelligent future.
                            </p>
                        </article>
                    </FadeIn>
                    <FadeIn className="flex">
                        <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                            <h3>
                                <Link href="#">
                                    <span className="absolute inset-0 rounded-3xl" />
                                    {/* <Image
                                        src={caseStudy.logo}
                                        alt={caseStudy.client}
                                        className="h-16 w-16"
                                        unoptimized
                                    /> */}
                                </Link>
                            </h3>
                            <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                                <span>Track 3</span>
                                {/* <span className="text-neutral-300" aria-hidden="true">
                                    /
                                </span> */}
                            </p>
                            <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                                Generative AI
                            </p>
                            <p className="mt-4 text-base text-neutral-600">
                                Dive into the world of Generative AI and explore how it can be used to create new content, enhance user experiences, and drive innovation.
                            </p>
                        </article>
                    </FadeIn>
                    {/* {caseStudies.map((caseStudy) => (
                        <FadeIn key={caseStudy.href} className="flex">
                            <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                                <h3>
                                    <Link href={caseStudy.href}>
                                        <span className="absolute inset-0 rounded-3xl" />
                                        <Image
                                            src={caseStudy.logo}
                                            alt={caseStudy.client}
                                            className="h-16 w-16"
                                            unoptimized
                                        />
                                    </Link>
                                </h3>
                                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                                    <time
                                        dateTime={caseStudy.date.split('-')[0]}
                                        className="font-semibold"
                                    >
                                        {caseStudy.date.split('-')[0]}
                                    </time>
                                    <span className="text-neutral-300" aria-hidden="true">
                                        /
                                    </span>
                                    <span>Case study</span>
                                </p>
                                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                                    {caseStudy.title}
                                </p>
                                <p className="mt-4 text-base text-neutral-600">
                                    {caseStudy.description}
                                </p>
                            </article>
                        </FadeIn>
                    ))} */}
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
                title="Everything you need to know about this year's MumbaiHacks"
                className="mt-24 sm:mt-32 lg:mt-40"
            >
                <p>
                    Don't see your question here? Reach out to us at hi@mumbaihacks.com
                </p>
            </SectionIntro>
            <Container className="mt-16">
                <div className="lg:flex lg:items-center lg:justify-end">
                    <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
                        <FadeIn className="w-135 flex-none lg:w-180">
                            <StylizedImage
                                src={imageLaptop}
                                sizes="(min-width: 1024px) 41rem, 31rem"
                                className="justify-center lg:justify-end"
                            />
                        </FadeIn>
                    </div>
                    <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
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
                        <ListItem title="What is the format of the event">
                            MumbaiHacks is a 24-hour hackathon where participants will work in
                            teams to build innovative projects. The event will feature workshops,
                            mentorship, and networking opportunities to help you make the most of
                            your experience.
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
            <Container className="mt-24 sm:mt-32 md:mt-56">
                <div className="grid grid-cols-3 gap-x-8">
                    <FadeIn className="col-span-2 max-w-3xl pr-24">
                        <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
                            The largest Hackathon in India
                        </h1>
                        <p className="mt-6 text-xl text-neutral-600">
                            3 line hackathon summary that outlines what the current edition is, talks about the GWR, and elicits enough excitement for the event to get users to click on the CTA below
                        </p>
                        <Button className="mt-8" href="/hackathon">
                            Sign up now for free
                        </Button>
                    </FadeIn>
                    <Image src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={100} height={200} alt="" className="-mt-16 flex-shrink w-full rounded-3xl" unoptimized />
                </div>
            </Container>

            <Clients />

            <CaseStudies caseStudies={caseStudies} />

            {/* <Testimonial
                className="mt-24 sm:mt-32 lg:mt-40"
                client={{ name: 'Phobia', logo: logoPhobiaDark }}
            >
                The team at Studio went above and beyond with our onboarding, even
                finding a way to access the user’s microphone without triggering one of
                those annoying permission dialogs.
            </Testimonial> */}

            <Services />

            <ContactSection />
        </RootLayout>
    )
}
