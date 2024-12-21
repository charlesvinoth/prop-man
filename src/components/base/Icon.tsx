import { Icon as IconPrimitive } from '@iconify/react'
import { cn } from '@/utils/cn'

interface IconProps {
  name: string
  className?: string
  onClick?: (e: React.MouseEvent) => void
}

const Icon: React.FC<IconProps> = ({ name, className, onClick }) => {
  return (
    <IconPrimitive
      icon={name}
      className={cn('size-5 shrink-0', className)}
      onClick={onClick}
    />
  )
}

export default Icon
