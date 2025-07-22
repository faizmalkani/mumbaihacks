"use client"

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { StylizedImage } from '@/components/StylizedImage'
import { SectionIntro } from '@/components/SectionIntro'
import imageFaq from '@/images/faqs.jpg'
import { sendGAEvent } from '@next/third-parties/google';

export default function Faqs()
{
    const handleFAQEmailClick = () =>
    {

        sendGAEvent({
            event: 'faq_email_click',
            link_name: 'Reach out to us',
            link_destination: 'hi@mumbaihacks.com',
        });

    }

    return (
        <>
            <SectionIntro
                eyebrow="FAQs"
                title="Everything you need to know about this year&apos;s MumbaiHacks"
                className="mt-24 sm:mt-32 lg:mt-40"
            >
                <p>
                    Don&apos;t see your question here? Reach out to us at <a onClick={() => handleFAQEmailClick()} href="mailto:hi@mumbaihacks.com">hi@mumbaihacks.com</a>
                </p>
            </SectionIntro>
            <Container className="mt-16">
                <div className="lg:flex lg:justify-end lg:items-center">
                    <div className="flex justify-center lg:justify-end lg:pr-12 lg:w-1/2">
                        <FadeIn className="flex-none w-135 lg:w-180">
                            <StylizedImage
                                src={imageFaq}
                                sizes="(min-width: 1024px) 41rem, 31rem"
                                className="justify-center lg:justify-end"
                            />
                        </FadeIn>
                    </div>
                    <List className="mt-16 lg:mt-0 lg:pl-4 lg:w-1/2 lg:min-w-132">

                        <ListItem title="What is the format of this year's MumbaiHacks">
                            MumbaiHacks 2025 will have an online round in the month of August,
                            where participants can submit their projects online.
                            The top teams will be selected to participate in the final round, which will be held in Mumbai on October 4th-5th, 2025.
                            The final round will be a 24-hour hackathon where teams will continue building their projects from Round 1 and present them to the judges.
                        </ListItem>
                        <ListItem title="Is the event free to attend">
                            Yes! The event is completely free to attend, and we encourage
                            everyone to apply and participate. MumbaiHacks has always
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