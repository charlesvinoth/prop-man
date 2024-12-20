import { Button, useMantineColorScheme } from '@mantine/core'

const HomePage = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme()

  const toggleColorScheme = () =>
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')

  return (
    <div className='p-6'>
      <Button
        variant='filled'
        className='capitalize'
        onClick={toggleColorScheme}
      >
        {colorScheme}
      </Button>
    </div>
  )
}

export default HomePage
