import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Button } from './Button'
import { sendGAEvent } from '@next/third-parties/google';

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
            { title: 'Apply Now', href: 'https://mumbaihacks25-round1.devfolio.co/' },
            { title: 'Reach out', href: 'mailto:hi@mumbaihacks.com' },
            { title: 'Code of Conduct', href: 'https://docs.google.com/document/d/1QgEsxP_6ekHjR9CSlcOAiS1OdDVqdjPLHkWJdFWi92k/edit?usp=sharing' },
        ],
    },
]

function Navigation()
{
    const handleFooterNavLinkClick = (linkName: string, destination: string) =>
    {

        sendGAEvent({
            event: 'footer_nav_link_click',
            link_name: linkName,
            link_destination: destination,
        });

    }

    return (
        <nav>
            <ul role="list" className="gap-8 grid grid-cols-2 sm:grid-cols-3">
                {navigation.map((section, sectionIndex) => (
                    <li key={sectionIndex}>
                        <div className="font-display font-semibold text-neutral-950 text-sm tracking-wider">
                            {section.title}
                        </div>
                        <ul role="list" className="mt-4 text-neutral-700 text-sm">
                            {section.links.map((link, linkIndex) => (
                                <li key={linkIndex} className="mt-4">
                                    <Link
                                        href={link.href}
                                        onClick={() => handleFooterNavLinkClick(link.title, link.href)}
                                        className="hover:text-neutral-950 transition duration-400" >
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

function NewsletterForm()
{

    const handleFooterRegisterLinkClick = () =>
    {

        sendGAEvent({
            event: 'footer_apply_click',
            link_name: 'Apply Now',
            link_destination: 'https://mumbaihacks25-round1.devfolio.co/',
        });

    }

    return (
        <form className="max-w-sm">
            <h2 className="font-display font-semibold text-neutral-950 text-sm tracking-wider">
                Ready to be a part of MumbaiHacks 2025?
            </h2>
            <p className="mt-4 text-neutral-700 text-sm">
                Join the event and prepare to start building!
            </p>
            <Button
                href="https://mumbaihacks25-round1.devfolio.co/"
                onClick={() => handleFooterRegisterLinkClick()}
                className="bg-neutral-950 hover:bg-neutral-800 mt-6 px-4 py-2 rounded-2xl font-semibold text-white text-base transition"
            >
                Apply now for free!
            </Button>
        </form>
    )
}

export function Footer()
{
    return (
        <Container as="footer" className="mt-24 sm:mt-32 lg:mt-40 w-full">
            <FadeIn>
                <div className="gap-x-8 gap-y-16 grid grid-cols-1 lg:grid-cols-2">
                    <Navigation />
                    <div className="flex lg:justify-end">
                        <NewsletterForm />
                    </div>
                </div>
                <div className="flex flex-wrap justify-between items-end gap-x-6 gap-y-4 mt-24 mb-20 pt-12 border-neutral-950/10 border-t">
                    <p className="text-neutral-700 text-sm">
                        © MumbaiHacks. {new Date().getFullYear()}
                    </p>
                </div>
            </FadeIn>
        </Container>
    )
}
