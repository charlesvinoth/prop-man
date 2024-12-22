import { Button, Checkbox, PasswordInput, TextInput } from '@mantine/core'
import { Link } from 'react-router'
import useLoginForm from '../hooks/useLoginForm'

const LoginForm = () => {
  const { register, errors, isSubmitting, onSubmit } = useLoginForm()

  return (
    <form aria-label='Login form' noValidate onSubmit={onSubmit}>
      <TextInput
        {...register('email')}
        label='Email'
        className='mb-4'
        error={errors.email?.message}
      />

      <PasswordInput
        {...register('password')}
        label='Password'
        error={errors.password?.message}
      />

      <div className='my-6 flex items-center justify-between'>
        <Checkbox {...register('rememberMe')} radius='sm' label='Remember me' />

        <Link
          to='/forgot-password'
          className='font-semibold text-primary-600 outline-none hover:underline focus-visible:underline'
        >
          Forgot password?
        </Link>
      </div>

      <Button
        fullWidth
        type='submit'
        loading={isSubmitting}
        aria-label={isSubmitting ? 'Logging in...' : 'Login'}
      >
        Login
      </Button>
    </form>
  )
}

export default LoginForm
