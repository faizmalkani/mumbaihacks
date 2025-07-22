"use client"

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { sendGAEvent } from '@next/third-parties/google';

export function ContactSection()
{
    const handleApplySectionLinkClick = () =>
    {

        sendGAEvent({
            event: 'ctasection_apply_click',
            link_name: 'Apply Now',
            link_destination: 'https://mumbaihacks25-round1.devfolio.co/',
        });

    }

    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            <FadeIn className="bg-neutral-950 -mx-6 sm:mx-0 px-6 md:px-12 py-20 sm:py-32 rounded-4xl">
                <div className="mx-auto max-w-4xl">
                    <div className="max-w-xl">
                        <h2 className="font-display font-medium text-white text-3xl sm:text-4xl text-balance">
                            Participate in MumbaiHacks 2025
                        </h2>
                        <div className="flex flex-col items-center gap-y-2 mt-6 w-fit">
                            <Button href="https://mumbaihacks25-round1.devfolio.co/"  onClick={() => handleApplySectionLinkClick()} invert>
                                Apply now for free
                            </Button>

                            <span className='text-white text-sm'>Takes ~3 minutes</span>
                        </div>
                        <div className="mt-10 pt-10 border-white/10 border-t">
                            <h3 className="font-display font-semibold text-white text-base">
                                Information you&apos;ll need to sign up
                            </h3>
                            <Offices
                                invert
                                className="gap-8 grid grid-cols-1 sm:grid-cols-2 mt-6"
                            />
                        </div>
                    </div>
                </div>
            </FadeIn>
        </Container>
    )
}
