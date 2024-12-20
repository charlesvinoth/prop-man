import { createTheme } from '@mantine/core'

const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  colors: {
    brand: [
      '#f0fdfa',
      '#cafdf1',
      '#96f9e3',
      '#59efd3',
      '#27dabe',
      '#0ebea5',
      '#09a593',
      '#0b7a6e',
      '#0e6159',
      '#11504a',
    ],
  },
  primaryColor: 'brand',
})

export default theme
