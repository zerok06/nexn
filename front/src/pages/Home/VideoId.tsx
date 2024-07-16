import Button from '@/components/Button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import HomeLayout from '@/layout/HomeLayout'

const VideoId = () => {
  return (
    <HomeLayout>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <div className="aspect-video w-full bg-white rounded-2xl"></div>
          <div>
            <div className="flex justify-between py-2">
              <h4>Tendencia</h4>
              <div>
                <Badge variant="default" className="text-white">
                  New
                </Badge>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-6">
              <h4 className="text-3xl font-bold">
                ILLOJUAN REACCIONA A REDDIT | RECOPILACIÓN
              </h4>
              <div className="flex gap-2 text-sm text-white/70">
                <p>200 Vistas</p>-<p>March 5, 2024</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4 items-center">
              <Avatar>
                <AvatarImage src="https://github.com/shadcns.png" />
                <AvatarFallback className="bg-white/20">CN</AvatarFallback>
              </Avatar>
              <p>zerok06</p>
            </div>
            <div>
              <Button>Seguir</Button>
            </div>
          </div>
        </div>
        <div className="w-[300px]"></div>
      </div>
    </HomeLayout>
  )
}

export default VideoId
