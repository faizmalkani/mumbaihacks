"use client"

import Image from 'next/image'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'

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
            <Container className="mt-12 lg:mt-16">
                <div className="items-center gap-x-8 gap-y-16 lg:gap-y-0">

                    <FadeIn className="flex flex-col justify-start gap-y-8 col-span-5 lg:col-span-3 pr-0 lg:pr-24">

                        {/* <div className='flex flex-col gap-y-2'>
                            <h1 className="font-display font-medium text-neutral-950 text-5xl lg:text-6xl text-balance leading-tight">
                                3,000 Innovators. <br />₹50 Lakh in rewards.<br /><span className='bg-clip-text bg-gradient-to-r from-[#12ACFB] to-[#67DD4D] font-bold text-transparent'>Infinite Possibility.</span>
                            </h1>
                        </div> */}

                        <div className='flex flex-col items-center gap-y-4 lg:gap-y-8 mx-auto'>
                            <Logo invert={true} className="sm:block w-5xl" />
                            <p className='mt-2 lg:mt-4 text-white text-base lg:text-3xl'>Welcome to the largest Agentic AI hackathon</p>
                        </div>

                        {/* <div className="flex flex-col gap-y-6 mt-2 lg:mt-16 text-gray-700 text-lg">
                            <p>
                               Mumbai becomes THE arena for AI innovation where Agentic AI is at the forefront! This year, more than 3000 innovators from across India will converge in Mumbai to build solutions that think, act, and adapt - unlocking the next generation of intelligent products.
                            </p>
                            <div className='flex flex-col gap-y-3'>
                                <div className='flex flex-row items-center gap-x-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="shrink-0" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z"/></svg>
                                    <p>
                                        <strong>Wave 1</strong> of <strong>Round 1</strong> Results is out, and selected teams have been notified over email. <span className='font-semibold'>Wave 2 coming 🔜</span>
                                    </p>
                                </div>
                                <div className='flex flex-row items-center gap-x-4'>
                                    <svg className='w-auto h-6' width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                                    <p>
                                        Round 2: NESCO, Mumbai. <span className='font-semibold'>November 28th and 29th 2025</span>
                                    </p>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className='flex flex-col items-center gap-y-2 w-fit'>
                            <Button className="self-start hover:opacity-80 text-shadow-md" onClick={() => handleMastheadApplyClick()} href="https://mumbaihacks25-round1.devfolio.co/"
                                style={{ background: 'radial-gradient(rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0.0) 100%), radial-gradient(at 55.57051494281389% 84.83827143622258%, hsla(200.70796460176993, 94.95798319327731%, 53.333333333333336%, 1) 0%, hsla(200.70796460176993, 94.95798319327731%, 53.333333333333336%, 0) 100%), radial-gradient(at 87.69589347010495% 8.700912371428826%, hsla(110.95890410958903, 69.52380952380952%, 58.82352941176471%, 1) 0%, hsla(110.95890410958903, 69.52380952380952%, 58.82352941176471%, 0) 100%), radial-gradient(at 55.269307591854634% 62.993858177883276%, hsla(200.70796460176993, 94.95798319327731%, 53.333333333333336%, 1) 0%, hsla(200.70796460176993, 94.95798319327731%, 53.333333333333336%, 0) 100%), radial-gradient(at 84.63605906075387% 58.189242532505325%, hsla(110.95890410958903, 69.52380952380952%, 58.82352941176471%, 1) 0%, hsla(110.95890410958903, 69.52380952380952%, 58.82352941176471%, 0) 100%), radial-gradient(at 27.394866741091974% 64.04196892799483%, hsla(200.70796460176993, 94.95798319327731%, 53.333333333333336%, 1) 0%, hsla(200.70796460176993, 94.95798319327731%, 53.333333333333336%, 0) 100%), radial-gradient(at 13.951492161807677% 48.91414771917425%, hsla(110.95890410958903, 69.52380952380952%, 58.82352941176471%, 1) 0%, hsla(110.95890410958903, 69.52380952380952%, 58.82352941176471%, 0) 100%), radial-gradient(at 35.72462367154259% 24.91290687191655%, hsla(200.70796460176993, 94.95798319327731%, 53.333333333333336%, 1) 0%, hsla(200.70796460176993, 94.95798319327731%, 53.333333333333336%, 0) 100%)' }}>
                                Apply now for free
                            </Button>
                            <span className='mt-1 text-gray-500 text-sm'>Applications open until October 17th. Takes ~3 minutes</span>
                        </div> */}
                    </FadeIn>

                    {/* <div className='hidden lg:block col-span-5 lg:col-span-2 pl-16'>
                        <Image src={imageMasthead} width={100} height={400} alt="" className="-mt-4 rounded-3xl w-full h-auto" unoptimized />
                    </div> */}
                </div>
            </Container>

        </>
    )
}