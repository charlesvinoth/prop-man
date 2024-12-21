interface LogoMarkProps {
  className?: string
}

const LogoMark: React.FC<LogoMarkProps> = ({ className }) => {
  return (
    <svg
      width='40'
      height='48'
      viewBox='0 0 40 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M32 26C32 31.5228 27.5228 36 22 36C16.4772 36 12 31.5228 12 26H4C4 35.9411 12.0589 44 22 44C31.9411 44 40 35.9411 40 26C40 16.0589 31.9411 8 22 8V16C27.5228 16 32 20.4772 32 26Z'
        className='fill-primary-600 dark:fill-primary-800'
      />
      <path
        d='M10 4C10 9.52285 5.52285 14 0 14V22C9.94113 22 18 13.9411 18 4H10Z'
        className='fill-secondary-300 dark:fill-secondary-400'
      />
    </svg>
  )
}

export default LogoMark
