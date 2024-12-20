import { useHover } from '@uidotdev/usehooks'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'

const features = [
  {
    title: 'Seamless Property Management',
    description:
      'Effortlessly manage your properties, tenants, and finances. Our intuitive platform streamlines your workflow and saves you time.',
  },
  {
    title: 'Tenant Satisfaction, Guaranteed',
    description:
      'Enhance tenant experiences with a user-friendly portal for rent payments, maintenance requests, and communication.',
  },
  {
    title: 'Swift and Reliable Maintenance',
    description:
      'Efficiently manage maintenance requests, and ensure timely resolution of issues and optimal property upkeep.',
  },
  {
    title: 'Financial Clarity, Simplified',
    description:
      "Gain insights into your property's financial performance with detailed reports and real-time analytics.",
  },
]

const Features = () => {
  const [ref, hovering] = useHover()
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (hovering) {
      return
    }

    const SLIDE_INTERVAL = 5000
    const nextIndex = (activeIndex + 1) % features.length
    const timeout = setTimeout(() => setActiveIndex(nextIndex), SLIDE_INTERVAL)

    return () => clearTimeout(timeout)
  }, [activeIndex, hovering])

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

export default Features
