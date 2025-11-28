'use client'

import { createContext, useContext, useEffect, useId, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { GridPattern } from '@/components/GridPattern'
import { Offices } from '@/components/Offices'
import { SocialMedia } from '@/components/SocialMedia'
import logoMiM from '@/images/logo_mim_dark.svg'
import logoTEAM from '@/images/logo_team_dark.svg'
import logoHCLProgress from '@/images/hcl.svg'
import logoMsins from '@/images/msins.svg'

const RootLayoutContext = createContext<{
    logoHovered: boolean
    setLogoHovered: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null)

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>)
{
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
            <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
        </svg>
    )
}

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>)
{
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path d="M2 6h20v2H2zM2 16h20v2H2z" />
        </svg>
    )
}

function Header({
    panelId,
    icon: Icon,
    expanded,
    onToggle,
    toggleRef,
    invert = false,
}: {
    panelId: string
    icon: React.ComponentType<{ className?: string }>
    expanded: boolean
    onToggle: () => void
    toggleRef: React.RefObject<HTMLButtonElement>
    invert?: boolean
})
{
    let { logoHovered, setLogoHovered } = useContext(RootLayoutContext)!

    return (
        <Container>
            <div className="flex flex-wrap justify-between items-center gap-x-16 py-8">

                <div className='flex flex-row items-center gap-x-8 w-auto'>
                    <Image src={logoTEAM} alt="TEAM" width={150} height={150} className="w-auto h-8 lg:h-12" unoptimized />
                    <Image src={logoMiM} alt="MumbaiHacks" width={150} height={150} className="ml-1 w-auto h-9 lg:h-13" unoptimized />
                </div>

                <div className='items-center gap-x-4 grid grid-cols-2 mt-8 lg:mt-0'>
                    <span className='pl-1.5 text-white text-xs lg:text-base'>Presented by</span>
                    <span className='pl-1.5 text-white text-xs lg:text-base'>State Partner</span>
                    <Image src={logoHCLProgress} alt="HCL" width={180} className='' />
                    <Image src={logoMsins} alt="HCL" width={180} className='' />
                </div>

                {/* <Link
                    href="/"
                    aria-label="Home"
                    onMouseEnter={() => setLogoHovered(true)}
                    onMouseLeave={() => setLogoHovered(false)}
                    className='grid grid-cols-1 w-xs lg:w-sm'
                >
                    <Logo className="sm:block w-full" invert={invert} filled={logoHovered} />

                    <div className='hidden lg:flex items-center gap-x-2 mt-4'>
                        <span>Presented by</span>
                        <Image src={logoHCLProgress} alt="HCL" width={220} className='' />
                    </div>

                </Link> */}

                {/* <div className="flex items-center gap-x-8">
                    
                    <Button className='!hidden lg:!block' href="/contact" invert={invert}>
                        Sign up for free
                    </Button>

                    <button
                        ref={toggleRef}
                        type="button"
                        onClick={onToggle}
                        aria-expanded={expanded ? 'true' : 'false'}
                        aria-controls={panelId}
                        className={clsx(
                            'group -m-2.5 p-2.5 rounded-full transition duration-400 ease-out cursor-pointer',
                            invert ? 'hover:bg-white/10' : 'hover:bg-neutral-950/10',
                        )}
                        aria-label="Toggle navigation"
                    >
                        <Icon
                            className={clsx(
                                'w-6 h-6',
                                invert
                                    ? 'fill-white group-hover:fill-neutral-200'
                                    : 'fill-neutral-950 group-hover:fill-neutral-700',
                            )}
                        />
                    </button>
                </div> */}
            </div>
        </Container>
    )
}

function NavigationRow({ children }: { children: React.ReactNode })
{
    return (
        <div className="sm:bg-neutral-950 even:mt-px">
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
            </Container>
        </div>
    )
}

function NavigationItem({
    href,
    children,
}: {
    href: string
    children: React.ReactNode
})
{
    return (
        <Link
            href={href}
            className="group isolate relative bg-neutral-950 -mx-6 sm:mx-0 sm:even:mt-0 even:mt-px px-6 sm:px-0 py-10 sm:py-16 sm:odd:pr-16 sm:even:pl-16 sm:even:border-neutral-800 sm:even:border-l"
        >
            {children}
            <span className="group-odd:right-0 group-even:left-0 -z-10 absolute inset-y-0 bg-neutral-900 opacity-0 group-hover:opacity-100 w-screen transition" />
        </Link>
    )
}

function Navigation()
{
    return (
        <nav className="my-px font-display font-medium text-white text-5xl tracking-tight">
            <NavigationRow>
                <NavigationItem href="/work">Our Work</NavigationItem>
                <NavigationItem href="/about">About Us</NavigationItem>
            </NavigationRow>
            <NavigationRow>
                <NavigationItem href="/process">Our Process</NavigationItem>
                <NavigationItem href="/blog">Blog</NavigationItem>
            </NavigationRow>
        </nav>
    )
}

function RootLayoutInner({ children }: { children: React.ReactNode })
{
    let panelId = useId()
    let [expanded, setExpanded] = useState(false)
    let [isTransitioning, setIsTransitioning] = useState(false)
    let openRef = useRef<React.ElementRef<'button'>>(null)
    let closeRef = useRef<React.ElementRef<'button'>>(null)
    let navRef = useRef<React.ElementRef<'div'>>(null)
    let shouldReduceMotion = useReducedMotion()

    useEffect(() =>
    {
        function onClick(event: MouseEvent)
        {
            if (
                event.target instanceof HTMLElement &&
                event.target.closest('a')?.href === window.location.href
            )
            {
                setIsTransitioning(false)
                setExpanded(false)
            }
        }

        window.addEventListener('click', onClick)

        return () =>
        {
            window.removeEventListener('click', onClick)
        }
    }, [])

    return (
        <MotionConfig
            transition={
                shouldReduceMotion || !isTransitioning ? { duration: 0 } : undefined
            }
        >
            <header>
                <div
                    className="top-2 right-0 left-0 z-40 absolute pt-14"
                    aria-hidden={expanded ? 'true' : undefined}
                // @ts-ignore (https://github.com/facebook/react/issues/17157)
                >

                </div>

                <Header
                    panelId={panelId}
                    icon={MenuIcon}
                    toggleRef={openRef}
                    expanded={expanded}
                    onToggle={() =>
                    {
                        setIsTransitioning(true)
                        setExpanded((expanded) => !expanded)
                        window.setTimeout(() =>
                            closeRef.current?.focus({ preventScroll: true }),
                        )
                    }}
                />
            </header>



            <motion.div
                layout
                className="relative flex flex-auto overflow-hidden"
            >
                <motion.div
                    layout
                    className="isolate relative flex flex-col pt-9 w-full"
                >


                    <main className="flex-auto w-full">{children}</main>

                    <Footer />
                </motion.div>
            </motion.div>
        </MotionConfig>
    )
}

export function RootLayout({ children }: { children: React.ReactNode })
{
    let pathname = usePathname()
    let [logoHovered, setLogoHovered] = useState(false)

    return (
        <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
            <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
        </RootLayoutContext.Provider>
    )
}
