import SignUpForm from '@/components/forms/SignUpForm'

const SignUp = () => {
  return (
    <section className="flex h-svh">
      <div className="w-[40%] hidden sm:block">
        <img
          src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-svh w-full object-cover"
        />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="w-[312px] md:w-[512px]">
          <h1 className="text-2xl font-medium">Sign In</h1>
          <p className="text-white/70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            distinctio error ullam.
          </p>
          <SignUpForm />
        </div>
      </div>
    </section>
  )
}

export default SignUp
