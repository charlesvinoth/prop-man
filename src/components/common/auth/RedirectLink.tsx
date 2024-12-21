import { Link } from 'react-router'

interface RedirectLinkProps {
  label: string
  route: string
  routeLabel: string
}

const RedirectLink: React.FC<RedirectLinkProps> = ({
  label,
  route,
  routeLabel,
}) => {
  return (
    <p className='mt-8 flex items-center justify-center gap-1 text-center text-gray-600 dark:text-gray-200'>
      {label}
      <Link
        to={route}
        className='font-semibold text-primary-600 outline-none hover:underline focus-visible:underline dark:text-primary-800'
      >
        {routeLabel}
      </Link>
    </p>
  )
}

export default RedirectLink
