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
            <FadeIn className="-mx-6 sm:mx-0 px-6 md:px-12 py-20 sm:py-32 rounded-4xl" style={{backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), radial-gradient(at 55.57051494281389% 84.83827143622258%, hsla(200.70796460176993, 94.95798319327731%, 53.333333333333336%, 1) 0%, hsla(200.70796460176993, 94.95798319327731%, 53.333333333333336%, 0) 100%), radial-gradient(at 87.69589347010495% 8.700912371428826%, hsla(110.95890410958903, 69.52380952380952%, 58.82352941176471%, 1) 0%, hsla(110.95890410958903, 69.52380952380952%, 58.82352941176471%, 0) 100%), radial-gradient(at 55.269307591854634% 62.993858177883276%, hsla(200.70796460176993, 94.95798319327731%, 53.333333333333336%, 1) 0%, hsla(200.70796460176993, 94.95798319327731%, 53.333333333333336%, 0) 100%), radial-gradient(at 84.63605906075387% 58.189242532505325%, hsla(110.95890410958903, 69.52380952380952%, 58.82352941176471%, 1) 0%, hsla(110.95890410958903, 69.52380952380952%, 58.82352941176471%, 0) 100%), radial-gradient(at 27.394866741091974% 64.04196892799483%, hsla(200.70796460176993, 94.95798319327731%, 53.333333333333336%, 1) 0%, hsla(200.70796460176993, 94.95798319327731%, 53.333333333333336%, 0) 100%), radial-gradient(at 13.951492161807677% 48.91414771917425%, hsla(110.95890410958903, 69.52380952380952%, 58.82352941176471%, 1) 0%, hsla(110.95890410958903, 69.52380952380952%, 58.82352941176471%, 0) 100%), radial-gradient(at 35.72462367154259% 24.91290687191655%, hsla(200.70796460176993, 94.95798319327731%, 53.333333333333336%, 1) 0%, hsla(200.70796460176993, 94.95798319327731%, 53.333333333333336%, 0) 100%)'}}>
                <div className="mx-auto max-w-4xl">
                    <div className="max-w-2xl">
                        <h2 className="text-shadow-md font-display font-semibold text-white text-3xl sm:text-5xl text-balance">
                            Participate in MumbaiHacks 2025
                        </h2>
                        <div className="flex flex-col items-start gap-y-2 mt-6 w-fit">
                            <Button href="https://mumbaihacks25-round1.devfolio.co/" onClick={() => handleApplySectionLinkClick()} className='bg-white' invert>
                                Apply now for free
                            </Button>

                            <span className='text-shadow-md mt-1 font-bold text-white text-sm'>Applications open until October 17th. Takes ~3 minutes</span>
                        </div>
                        <div className="mt-10 pt-10 border-white/10 border-t">
                            <h3 className="text-shadow-md font-display font-semibold text-white text-base">
                                Information you&apos;ll need
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
