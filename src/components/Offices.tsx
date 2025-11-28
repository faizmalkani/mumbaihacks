import clsx from 'clsx'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'pr-4 text-sm not-italic',
        invert ? 'text-white' : 'text-neutral-600',
      )}
    >
      <strong className={`font-bold text-lg text-shadow-md {invert ? 'text-white' : 'text-neutral-950'}`}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="To sign up" invert={invert}>
          <span className='block text-shadow-md mt-2 font-semibold text-balance'>Your email, LinkedIn, and work / college details. Once you&apos;ve signed up, create your team on Devfolio and invite your teammates to join.</span>
        </Office>
      </li>
      <li>
        <Office name="To apply for shortlisting" invert={invert}>
            <span className='block text-shadow-md mt-2 font-semibold text-balance'>Problem statement selection, a team of 2-4 members, a few lines on your solution, and a list of technologies you plan to use.</span>
        </Office>
      </li>
    </ul>
  )
}
