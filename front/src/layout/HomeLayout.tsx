import AsideBar from '@/components/AsideBar'
import NavBar from '@/components/NavBar'

interface HomeLayoutProps {
  children?: React.ReactNode
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <section className="flex flex-row min-h-screen">
      <AsideBar />
      <div className="flex-1 bg-white/5">
        <NavBar />
        <section className="py-4 px-8">{children}</section>
      </div>
    </section>
  )
}

export default HomeLayout
