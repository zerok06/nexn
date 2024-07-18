import React from 'react'

const NoFoundPage = () => {
  return (
    <div className="grid h-screen place-content-center bg-black px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-800">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-500 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-500">We can't find that page.</p>

        <a
          href="/"
          className="mt-6 inline-block rounded-full bg-primary px-5 py-3 text-sm font-medium text-white"
        >
          Go Back Home
        </a>
      </div>
    </div>
  )
}

export default NoFoundPage
