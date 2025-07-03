import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'
import { Button } from './Button'

const navigation = [
    {
        title: 'TEAM',
        links: [
            { title: 'Website', href: 'https://mumbaitech.team/' },
            { title: 'X / Twitter', href: 'https://twitter.com/mumbai_tech_' },
            { title: 'Instagram', href: 'https://www.instagram.com/mumbai_tech_/' },
            { title: 'LinkedIn', href: 'https://www.linkedin.com/company/mumbaitech' },
        ],
    },
    {
        title: 'Made in Mumbai',
        links: [
            { title: 'Website', href: 'https://madeinmumbai.org/' },
            { title: 'X / Twitter', href: 'https://x.com/madeinmumbai_' },
            { title: 'Instagram', href: 'https://www.instagram.com/madeinmumbai_' },
            { title: 'LinkedIn', href: 'https://www.linkedin.com/company/made-in-mumbai' },
        ],
    },
    {
        title: 'MumbaiHacks',
        links: [
            { title: 'Register', href: 'https://mumbaihacks25-round1.devfolio.co/' },
            { title: 'Reach out', href: 'mailto:hi@mumbaihacks.com' },
            { title: 'Code of Conduct', href: 'https://docs.google.com/document/d/1QgEsxP_6ekHjR9CSlcOAiS1OdDVqdjPLHkWJdFWi92k/edit?usp=sharing' },
        ],
    },
]

function Navigation()
{
    return (
        <nav>
            <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                {navigation.map((section, sectionIndex) => (
                    <li key={sectionIndex}>
                        <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
                            {section.title}
                        </div>
                        <ul role="list" className="mt-4 text-sm text-neutral-700">
                            {section.links.map((link, linkIndex) => (
                                <li key={linkIndex} className="mt-4">
                                    <Link
                                        href={link.href}
                                        className="transition duration-400 hover:text-neutral-950"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>)
{
    return (
        <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
            <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 3 10 .5v2H0v1h10v2L16 3Z"
            />
        </svg>
    )
}

function NewsletterForm()
{
    return (
        <form className="max-w-sm">
            <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
                Ready to be a part of MumbaiHacks 2025?
            </h2>
            <p className="mt-4 text-sm text-neutral-700">
                Join the event and prepare to start building!
            </p>
            <Button
                href="/"
                className="mt-6 rounded-2xl bg-neutral-950 px-4 py-2 text-base font-semibold text-white transition hover:bg-neutral-800"
            >
                Register now for free!
            </Button>
            {/* <div className="relative mt-6">
        <input
          type="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pr-20 pl-6 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div> */}
        </form>
    )
}

export function Footer()
{
    return (
        <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
            <FadeIn>
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                    <Navigation />
                    <div className="flex lg:justify-end">
                        <NewsletterForm />
                    </div>
                </div>
                <div className="mt-24 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
                    {/* <Link href="/" aria-label="Home">
                        <Logo className="h-8" fillOnHover />
                    </Link> */}
                    <p className="text-sm text-neutral-700">
                        © MumbaiHacks. {new Date().getFullYear()}
                    </p>
                </div>
            </FadeIn>
        </Container>
    )
}
