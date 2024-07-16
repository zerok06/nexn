import Button from '@/components/Button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import HomeLayout from '@/layout/HomeLayout'

const VideoId = () => {
  return (
    <HomeLayout>
      <div className="flex flex-col lg:flex-row py-8">
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
          <div className="mt-6 text-white/70">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit doloremque corporis vitae officiis dolores repellendus
            odio dicta ad eaque nihil? At beatae unde cum temporibus id nobis
            eveniet animi rerum autem ducimus culpa, recusandae eum illum modi
            dolore incidunt cupiditate sint ipsa laudantium? Eos in libero fuga?
            Saepe nihil, sit debitis numquam nesciunt laudantium, minima dolorem
            illum eum quisquam harum error exercitationem mollitia. Repellendus
            mollitia nulla facilis. Doloribus atque culpa expedita reprehenderit
            fugiat sint dicta iste maiores veniam aliquid incidunt ad
            repellendus laudantium odit necessitatibus, voluptates delectus!
            Distinctio animi magnam minima dolorem dolores, illo saepe
            voluptatibus dicta, fugit corrupti amet porro vel ex at sunt
            reprehenderit! Velit consequatur, dignissimos sed beatae qui
            provident error labore consequuntur, corrupti cum laboriosam! Quis
            tempora reprehenderit eos corporis? Vitae cupiditate nam non magni
            veniam nesciunt, maxime aspernatur nobis officiis deserunt fugit
            quam expedita nisi ducimus voluptatum. Alias reiciendis iusto,
            recusandae dolores sit officiis voluptate explicabo quam animi est a
            fugit mollitia nisi tempore impedit voluptates repellat dicta. Magni
            sit perferendis laborum? Temporibus cum quisquam necessitatibus
            doloribus eligendi, voluptatum harum minus ratione fugiat sint sunt
            recusandae et id inventore beatae itaque aliquam totam voluptas
            sapiente debitis. Dolore quas explicabo nemo totam esse dignissimos
            obcaecati eum.
          </div>
        </div>
        <div className="w-[400px]"></div>
      </div>
    </HomeLayout>
  )
}

export default VideoId
