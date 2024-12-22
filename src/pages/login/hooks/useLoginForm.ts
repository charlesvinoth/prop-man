import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
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

export default function useLoginForm() {
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

  return { register, errors, isSubmitting, onSubmit: handleSubmit(onSubmit) }
}
