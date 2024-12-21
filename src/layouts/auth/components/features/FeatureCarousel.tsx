import { useHover } from '@uidotdev/usehooks'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect } from 'react'
import { Feature } from '@/types'

interface CarouselProps {
  features: Feature[]
  activeIndex: number
  setActiveIndex: (index: number) => void
}

const Carousel: React.FC<CarouselProps> = ({
  features,
  activeIndex,
  setActiveIndex,
}) => {
  const [ref, hovering] = useHover()

  useEffect(() => {
    if (hovering) {
      return
    }

    const SLIDE_INTERVAL = 5000
    const nextIndex = (activeIndex + 1) % features.length
    const timeout = setTimeout(() => setActiveIndex(nextIndex), SLIDE_INTERVAL)

    return () => clearTimeout(timeout)
  }, [activeIndex, features.length, hovering, setActiveIndex])

  return (
    <AnimatePresence mode='wait'>
      {features.map(
        (feature, index) =>
          index === activeIndex && (
            <motion.div
              ref={ref}
              key={feature.title}
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
              }}
              className='text-center'
            >
              <h1 className='mb-2 mt-4 text-2xl font-bold'>{feature.title}</h1>
              <p className='text-base text-gray-600 dark:text-gray-200'>
                {feature.description}
              </p>
            </motion.div>
          ),
      )}
    </AnimatePresence>
  )
}

export default Carousel
