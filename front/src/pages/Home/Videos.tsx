import HomeLayout from '@/layout/HomeLayout'
import VideosRender from '@/components/Videos'

const Videos = () => {
  return (
    <HomeLayout>
      <h3 className="text-lg font-medium text-white/80">Tendencia</h3>
      <VideosRender />
    </HomeLayout>
  )
}

export default Videos
