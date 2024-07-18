import { sendRequest } from '@/lib/sendRequest'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const SignUpSchema = z.object({
  username: z.string().min(5),
  password: z.string().min(5),
  nombres: z.string().min(5),
  apellidos: z.string().min(5),
})

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      apellidos: '',
      nombres: '',
      password: '',
      username: '',
    },
  })
  const navigate = useNavigate()

  const onSubmit = async (data: any) => {
    console.log(data)

    const fetching = await sendRequest(
      'http://localhost:3001/api/users/register',
      'post',
      data
    )
    const res = await fetching.json()
    if (res.success == true) {
      navigate('/signin')
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
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="nombres" className="text-white/70 text-sm">
            Nombres
          </label>
          <input
            type="nombres"
            id="nombres"
            className="w-full bg-white/10 px-4 py-2 rounded-xl outline-none"
            autoComplete="off"
            {...register('nombres')}
          />

          {errors?.nombres && (
            <p className="text-sm text-red-500 leading-tight">
              {errors?.nombres?.message}
            </p>
          )}
        </div>
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="apellidos" className="text-white/70 text-sm">
            Apellidos
          </label>
          <input
            type="apellidos"
            id="apellidos"
            className="w-full bg-white/10 px-4 py-2 rounded-xl outline-none"
            autoComplete="off"
            {...register('apellidos')}
          />

          {errors?.apellidos && (
            <p className="text-sm text-red-500 leading-tight">
              {errors?.apellidos?.message}
            </p>
          )}
        </div>
      </div>
      <div></div>
      <button className="px-4 py-2 rounded-xl bg-primary">Register</button>
    </form>
  )
}

export default SignUpForm
