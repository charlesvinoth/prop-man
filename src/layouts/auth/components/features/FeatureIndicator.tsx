import { ActionIcon } from '@mantine/core'
import { Icon } from '@/components/base'
import { Feature } from '@/types'

interface FeatureIndicatorProps {
  features: Feature[]
  activeIndex: number
  setActiveIndex: (index: number) => void
}

const FeatureIndicator: React.FC<FeatureIndicatorProps> = ({
  features,
  activeIndex,
  setActiveIndex,
}) => {
  return (
    <div className='mt-10 flex items-center justify-center'>
      {features.map((_, index) => (
        <ActionIcon
          key={index}
          aria-label={`Feature indicator ${index + 1}`}
          radius='xl'
          size='lg'
          variant='subtle'
          color={index === activeIndex ? 'brand' : 'gray'}
          onClick={() => setActiveIndex(index)}
        >
          <Icon
            name={
              index === activeIndex
                ? 'material-symbols:remove-rounded'
                : 'mdi:dot'
            }
            className='size-7'
          />
        </ActionIcon>
      ))}
    </div>
  )
}

export default FeatureIndicator
