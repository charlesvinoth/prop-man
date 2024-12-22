import { Button } from '@mantine/core'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { Icon } from '@/components/base'
import Description from '@/components/common/auth/Description'
import RedirectLink from '@/components/common/auth/RedirectLink'
import Title from '@/components/common/auth/Title'
import { RootState } from '@/stores'
import LoginForm from './components/LoginForm'

const LoginPage = () => {
  const user = useSelector((state: RootState) => state.session.user)

  if (user) {
    return <Navigate to='/' replace />
  }

  return (
    <div>
      <Title>Welcome back!</Title>
      <Description>Log in and simplify your property management.</Description>

      <LoginForm />

      <Button
        justify='center'
        fullWidth
        leftSection={<Icon name='devicon:google' />}
        variant='default'
        className='mt-4 bg-transparent'
      >
        Login with Google
      </Button>

      <RedirectLink
        label="Don't have an account?"
        route='/sign-up'
        routeLabel='Sign up'
      />
    </div>
  )
}

export default LoginPage
