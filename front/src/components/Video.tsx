import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const Video = () => {
  return (
    <div className="w-[25%] min-w-[312px]">
      <div>
        <img
          src="https://i.ytimg.com/vi/Bg9KhB0u3S8/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAtiTGwleWIDnypnWdAnKJZHigVrA"
          className="aspect-video rounded-2xl"
          alt=""
        />
      </div>
      <div className="mt-2 flex gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcns.png" />
          <AvatarFallback className="bg-white/20">CN</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div>
            <h3 className="font-medium text-sm">zerok06</h3>
          </div>
          <div>
            <h2 className="text-white font-bold leading-snug text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              maiores?
            </h2>
            <div className="flex text-xs text-white/70  gap-3 mt-2">
              <p>
                <span>120</span> Vistas
              </p>
              <p>March 4, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video
