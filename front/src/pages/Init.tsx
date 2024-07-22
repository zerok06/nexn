const Init = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4">
        <nav className="h-20 flex justify-between items-center">
          <a href="/">NEXN</a>
          <a href="/signup" className="px-4 py-2 rounded-full bg-primary">
            Create Account
          </a>
        </nav>
      </div>
      <section className="h-[calc(100vh-80px)]">
        <div className="max-w-6xl mx-auto h-full">
          <div className="flex flex-col items-center justify-center h-full gap-4 px-4">
            <h1 className="text-5xl font-bold text-center">
              Revoluciona tu Experiencia Digital con NEXN
            </h1>
            <p className="text-lg text-white/70 max-w-3xl text-center">
              Transforma la forma en que interactúas con la tecnología.
              Simplifica tus tareas diarias, mantente conectado y descubre una
              eficiencia sin igual. Bienvenido a la revolución digital con NEXN.
            </p>
            <div className="flex gap-4">
              <a
                href="/signin"
                className="px-4 py-2 rounded-full bg-primary border-2 border-primary"
              >
                Sign In
              </a>
              <a
                href="/signup"
                className="px-4 py-2 rounded-full bg-transparent text-primary border-2 border-primary"
              >
                Create Account
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Init
