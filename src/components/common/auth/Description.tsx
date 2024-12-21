interface DescriptionProps {
  children: React.ReactNode
}

const Description: React.FC<DescriptionProps> = ({ children }) => {
  return <p className='mb-10 text-gray-600 dark:text-gray-200'>{children}</p>
}

export default Description
