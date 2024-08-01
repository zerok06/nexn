import { useAuth } from '@/context/AuthProvider'
import { sendRequest } from '@/lib/sendRequest'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

const SignInSchema = z.object({
  username: z.string().min(5, {
    message: 'Se requiere mínimo 5 caracteres.',
  }),
  password: z.string().min(5, {
    message: 'Se requiere mínimo 5 caracteres.',
  }),
})

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      password: '',
      username: '',
    },
  })
  const { setToken } = useAuth()
  const navigate = useNavigate()
  const onSubmit = async (data: any) => {
    const fetching = await sendRequest('/api/signin', 'post', data)
    const res = await fetching.json()
    if (res.success) {
      setToken({
        apellidos: res.user.apellidos,
        _id: res.user._id,
        nombres: res.user.nombres,
        username: res.user.credenciales.username,
      })
      navigate('/home')
    }
  }

  return (
    <form
      className="flex my-4 flex-col gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col w-full gap-1">
        <label htmlFor="username" className="text-white/70 text-sm">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="w-full bg-white/10 px-4 py-2 rounded-xl outline-none"
          autoComplete="off"
          {...register('username')}
        />
        {errors?.username && (
          <p className="text-sm text-red-500 leading-tight">
            {errors?.username?.message}
          </p>
        )}
      </div>
      <div className="flex flex-col w-full gap-1">
        <label htmlFor="password" className="text-white/70 text-sm">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full bg-white/10 px-4 py-2 rounded-xl outline-none"
          autoComplete="off"
          {...register('password')}
        />
        {errors?.password && (
          <p className="text-sm text-red-500 leading-tight">
            {errors?.password?.message}
          </p>
        )}
      </div>
      <div></div>
      <button className="px-4 py-2 rounded-xl bg-primary">Sign In</button>
    </form>
  )
}

export default SignInForm
