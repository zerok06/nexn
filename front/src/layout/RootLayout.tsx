interface RootLayoutProps {
  children?: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <section className="bg-black min-h-screen text-white">{children}</section>
  )
}

export default RootLayout
