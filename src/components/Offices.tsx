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
        'text-sm not-italic pr-4',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
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
        <Office name="Participant details" invert={invert}>
          Emails, LinkedIn, work / college details, and your team members phone numbers to send them the sign-up link!
        </Office>
      </li>
      {/* <li>
        <Office name="Track selection" invert={invert}>
            Choose a track that aligns with the project idea which you will build. This cannot be changed later.
        </Office>
      </li> */}
    </ul>
  )
}
