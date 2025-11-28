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
            // { title: 'Apply Now', href: 'https://mumbaihacks25-round1.devfolio.co/' },
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
                        <div className="font-display font-semibold text-white text-sm tracking-wider">
                            {section.title}
                        </div>
                        <ul role="list" className="mt-4 text-white text-sm">
                            {section.links.map((link, linkIndex) => (
                                <li key={linkIndex} className="mt-4">
                                    <Link
                                        href={link.href}
                                        onClick={() => handleFooterNavLinkClick(link.title, link.href)}
                                        className="hover:text-neutral-400 transition duration-400" >
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
        <form className="hidden max-w-sm">
            <h2 className="font-display font-semibold text-neutral-950 text-sm tracking-wider">
                Ready to be a part of MumbaiHacks 2025?
            </h2>
            <p className="mt-1 text-neutral-700 text-sm">
                Join the event and prepare to start building!
            </p>
            <div className="flex flex-col items-start gap-y-2 mt-6 w-fit">
                <Button className="self-start hover:opacity-80 text-shadow-md"

                    onClick={() => handleFooterRegisterLinkClick()} href="https://mumbaihacks25-round1.devfolio.co/"
                    style={{ background: 'radial-gradient(rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0.0) 100%), radial-gradient(at 55.57051494281389% 84.83827143622258%, hsla(200.70796460176993, 94.95798319327731%, 53.333333333333336%, 1) 0%, hsla(200.70796460176993, 94.95798319327731%, 53.333333333333336%, 0) 100%), radial-gradient(at 87.69589347010495% 8.700912371428826%, hsla(110.95890410958903, 69.52380952380952%, 58.82352941176471%, 1) 0%, hsla(110.95890410958903, 69.52380952380952%, 58.82352941176471%, 0) 100%), radial-gradient(at 55.269307591854634% 62.993858177883276%, hsla(200.70796460176993, 94.95798319327731%, 53.333333333333336%, 1) 0%, hsla(200.70796460176993, 94.95798319327731%, 53.333333333333336%, 0) 100%), radial-gradient(at 84.63605906075387% 58.189242532505325%, hsla(110.95890410958903, 69.52380952380952%, 58.82352941176471%, 1) 0%, hsla(110.95890410958903, 69.52380952380952%, 58.82352941176471%, 0) 100%), radial-gradient(at 27.394866741091974% 64.04196892799483%, hsla(200.70796460176993, 94.95798319327731%, 53.333333333333336%, 1) 0%, hsla(200.70796460176993, 94.95798319327731%, 53.333333333333336%, 0) 100%), radial-gradient(at 13.951492161807677% 48.91414771917425%, hsla(110.95890410958903, 69.52380952380952%, 58.82352941176471%, 1) 0%, hsla(110.95890410958903, 69.52380952380952%, 58.82352941176471%, 0) 100%), radial-gradient(at 35.72462367154259% 24.91290687191655%, hsla(200.70796460176993, 94.95798319327731%, 53.333333333333336%, 1) 0%, hsla(200.70796460176993, 94.95798319327731%, 53.333333333333336%, 0) 100%)' }}>
                    Apply now for free
                </Button>
                <span className='mt-1 text-neutral-500 text-sm'>Applications open until October 17th. Takes ~3 minutes</span>
            </div>

        </form>
    )
}

export function Footer()
{
    return (
        <Container as="footer" className="mt-16 lg:mt-24 w-full">
            <FadeIn>
                <div className="gap-x-8 gap-y-16 grid grid-cols-1 lg:grid-cols-2">
                    <Navigation />
                    {/* <div className="flex lg:justify-end">
                        <NewsletterForm />
                    </div> */}
                </div>
                <div className="flex flex-wrap justify-between items-end gap-x-6 gap-y-4 mt-8 lg:mt-24 mb-20 pt-12 border-neutral-950/10 border-t">
                    <p className="text-neutral-300 text-sm">
                        © MumbaiHacks {new Date().getFullYear()}. TEAM and Made in Mumbai
                    </p>
                </div>
            </FadeIn>
        </Container>
    )
}
