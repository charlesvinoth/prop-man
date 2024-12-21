import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Checkbox, PasswordInput, TextInput } from '@mantine/core'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router'
import { z } from 'zod'

const schema = z.object({
  email: z
    .string({ message: 'Email is required.' })
    .email({ message: 'Please enter a valid email address.' }),
  password: z
    .string({ message: 'Password is required.' })
    .min(8, 'Password must be 8 characters long.'),
  rememberMe: z.boolean(),
})

type FormFields = z.infer<typeof schema>

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(data)
    reset()
  }

  return (
    <form aria-label='Login form' noValidate onSubmit={handleSubmit(onSubmit)}>
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
