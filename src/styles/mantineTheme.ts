import { createTheme, PasswordInput, TextInput } from '@mantine/core'

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
  defaultRadius: '6px',
  components: {
    TextInput: TextInput.extend({
      classNames: {
        label: 'mb-2',
        input: 'bg-transparent',
      },
    }),
    PasswordInput: PasswordInput.extend({
      classNames: {
        label: 'mb-2',
        input: 'bg-transparent',
      },
    }),
  },
})

export default theme
