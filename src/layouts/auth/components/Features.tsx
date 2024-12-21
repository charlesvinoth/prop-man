import { useState } from 'react'
import { Feature } from '@/types'
import FeatureCarousel from './features/FeatureCarousel'
import FeatureIndicator from './features/FeatureIndicator'

const features: Feature[] = [
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
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <FeatureCarousel
        features={features}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <FeatureIndicator
        features={features}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </>
  )
}

export default Features
