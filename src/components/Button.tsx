import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps = {
    invert?: boolean
} & (
        | React.ComponentPropsWithoutRef<typeof Link>
        | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
    )

export function Button({ invert = false, className, children, ...props }: ButtonProps)
{
    className = clsx(
        className, 'inline-flex rounded-full px-6 py-3 text-md font-semibold transition duration-300 ease-out',
        invert ? 'bg-white text-neutral-950 hover:bg-neutral-200' : 'bg-neutral-950 text-white hover:bg-neutral-600',
    )

    let inner = <span className="top-px relative">{children}</span>

    if (typeof props.href === 'undefined')
    {
        return (
            <button className={className} {...props}>
                {inner}
            </button>
        )
    }

    return (
        <Link target='_blank' className={className} {...props}>
            {inner}
        </Link>
    )
}
