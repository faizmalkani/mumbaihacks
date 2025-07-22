"use client"

import Image from 'next/image'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/Button'

import imageMasthead from '@/images/masthead.jpg'

import { sendGAEvent } from '@next/third-parties/google';

export function Masthead()
{
    const handleMastheadApplyClick = () =>
    {
        sendGAEvent({
            event: 'masthead_apply_click',
            link_name: 'Apply Now',
            link_destination: 'https://mumbaihacks25-round1.devfolio.co/',
        });
        
    }

    return (
        <>
            <Container className="mt-28 lg:mt-32">
                <div className="gap-x-8 gap-y-16 lg:gap-y-0 grid grid-cols-5">

                    <FadeIn className="flex flex-col justify-start gap-y-8 col-span-5 lg:col-span-3 pr-0 lg:pr-24 max-w-3xl">

                        <h1 className="font-display font-medium text-neutral-950 text-5xl lg:text-7xl text-balance">
                            The world&apos;s largest GenAI hackathon is back!
                        </h1>
                        <div className="flex flex-col gap-y-4 text-gray-700 text-lg">
                            <p>
                                Join India&apos;s brightest minds to build the future in Mumbai, one line of code at a time. MumbaiHacks is more than a hackathon - it&apos;s a launchpad for innovation, a celebration of creativity, and a community of builders.
                            </p>
                            <div className='flex flex-row items-center gap-x-4'>
                                <svg className='w-auto h-6' width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 9H21M9 15L11 17L15 13M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p>
                                    Round 1: Online, August 12th to 31st 2025
                                </p>
                            </div>
                            <div className='flex flex-row items-center gap-x-4'>
                                {/* <svg className='w-auto h-6' width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg> */}
                                <svg className='w-auto h-6' width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 9H21M9 15L11 17L15 13M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p>
                                    Round 2: Mumbai, October 4th to 5th 2025
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center gap-y-2 w-fit'>
                            <Button className="self-start" onClick={() => handleMastheadApplyClick()} href="https://mumbaihacks25-round1.devfolio.co/">
                                Apply now for free
                            </Button>
                            <span className='text-gray-500 text-sm'>Takes ~3 minutes</span>
                        </div>
                    </FadeIn>

                    <div className='hidden lg:block col-span-5 lg:col-span-2 pl-16'>
                        <Image src={imageMasthead} width={100} height={400} alt="" className="-mt-4 rounded-3xl w-full h-auto" unoptimized />
                    </div>
                </div>
            </Container>

        </>
    )
}