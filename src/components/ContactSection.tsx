import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection()
{
    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
                <div className="mx-auto max-w-4xl">
                    <div className="max-w-xl">
                        <h2 className="font-display text-3xl font-medium text-balance text-white sm:text-4xl">
                            Participate in MumbaiHacks 2025
                        </h2>
                        <div className="mt-6 flex flex-col items-center w-fit gap-y-2">
                            <Button href="https://mumbaihacks25-round1.devfolio.co/" invert>
                                Apply now for free
                            </Button>

                            <span className='text-white text-sm'>Takes ~3 minutes</span>
                        </div>
                        <div className="mt-10 border-t border-white/10 pt-10">
                            <h3 className="font-display text-base font-semibold text-white">
                                Information you&apos;ll need to sign up
                            </h3>
                            <Offices
                                invert
                                className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                            />
                        </div>
                    </div>
                </div>
            </FadeIn>
        </Container>
    )
}
