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
                <div className="lg:justify-end lg:items-start lg:gap-x-20 lg:grid lg:grid-cols-2">
                    <List className="mt-16 lg:mt-0">

                        <ListItem title="Who can participate">
                            MumbaiHacks is a free, open-for-all hackathon, regardless of experience level, background, or expertise. As long as you&apos;re over 18, and want to break boundaries, we&apos;ll be happy to have you.
                        </ListItem>
                        <ListItem title="What is the format of this year's MumbaiHacks">
                            MumbaiHacks 2025 will have an shortlisting round in the month of August,
                            where participants can submit their solution ideas online.
                            The top teams will be selected to participate in the final round, which will be held in Mumbai on November 28th and 29th, 2025.
                            The final round will be a 24-hour hackathon where teams will continue building their projects from Round 1 and present them to the judges.
                        </ListItem>
                        <ListItem title="Is the event free to attend">
                            Yes! The event is completely free to attend, and we encourage
                            everyone to apply and participate. MumbaiHacks has always
                            been a free event, and we want to keep it that way.
                        </ListItem>
                        <ListItem title="What are the prizes">
                            We have some exciting prizes lined up for the winners of MumbaiHacks.
                            The details of the prizes will be announced closer to the event date,
                            so stay tuned!
                        </ListItem>
                        <ListItem title="Can I change my team">
                            Teams created during the online round cannot be modified. If your team is selected for the in-person round and changes are required, come to the event with your final team and notify our registration desk.
                        </ListItem>
                    </List>
                    <List className="mt-16 lg:mt-0">
                        <ListItem title="Can I change my problem statement">
                            Problem statement selection can only be changed until the final day of the online round. Post-that, your problem statement is final and needs to match what you build on-ground.
                        </ListItem>
                        <ListItem title="Can I edit my project after submission">
                            Projects submitted to the online round can be edited until the final day of submission.
                        </ListItem>
                        <ListItem title="Where can I get future updates for the event">
                            On our <a>WhatsApp channel!</a> So, bring your teams over to the channel too.
                        </ListItem>
                        <ListItem title="Can I participate solo">
                            Solo participants aren&apos;t allowed. All participants must be part of a team, ranging from a size of 2-4 team members.
                        </ListItem>
                        <ListItem title="How will teams be shortlisted">
                            For the online round, all submissions will be evaluated on the basis of the solution outline.
                        </ListItem>
                        <ListItem title="Can I attend the on-ground event if I&apos;m not shortlisted">
                            Unfortunately the venue can only accommodate a fixed number of teams, so only shortlisted participants can attend the final round.
                        </ListItem>

                    </List>
                </div>
            </Container>
        </>
    )
}