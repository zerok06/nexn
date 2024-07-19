import ChatButton from '@/components/Messages/ChatButton'
import { Separator } from '@/components/ui/separator'
import { useAuth } from '@/context/AuthProvider'
import HomeLayout from '@/layout/HomeLayout'
import { Send } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Messages = () => {
  const { isAuth } = useAuth()
  const navigate = useNavigate()
  if (!isAuth) {
    navigate('/signin')
  }
  return (
    <HomeLayout>
      <div className="flex min-h-[calc(100svh-80px-32px)]">
        <div className="min-w-[312px] bg-black py-4 px-2 rounded-tl-2xl rounded-bl-2xl">
          <div className="px-2 mb-4">
            <h2>Messages (12)</h2>
          </div>
          <Separator className="my-2 bg-white/10" />

          {[1, 2, 3, 4].map(() => (
            <ChatButton />
          ))}
        </div>

        <div className="flex-1 border-t-2 border-b-2 border-r-2 border-black relative flex flex-col z-0">
          <div className="flex-1 bg-transparent px-4 overflow-y-scroll max-h-[calc(100svh-80px-40px)]">
            <div className=" flex flex-col gap-8 py-12">
              {/* MEssage item antoher */}
              <div className=" flex flex-col items-start">
                <div className="flex gap-2 mb-1">
                  <p className="text-xs font-medium text-white">John Doe</p>
                  <p className="text-xs font-medium text-white/70">10:30</p>
                </div>
                <div className="bg-white/30 px-4 py-3 rounded-xl max-w-[70%] text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Facere quisquam laborum, quas doloribus unde voluptate
                  provident ducimus, ad atque ipsum vel qui, tempora iure
                  corrupti voluptatibus quia quibusdam. Sed quae ea earum sequi
                  deserunt ut dolores exercitationem eius. Cumque totam maiores
                  labore temporibus a distinctio laudantium repellendus nesciunt
                  cum ab, molestias error. Velit tenetur possimus officiis,
                  maxime modi facilis sequi. Sit commodi maxime sint qui et
                  praesentium sunt. Temporibus quos nihil quidem dolorem quo,
                  eum earum ducimus excepturi! Nam aliquid inventore optio eum
                  ex quae, accusamus enim nostrum quam? Voluptatibus nostrum hic
                  doloremque quidem ut, ex velit expedita ad tempore.
                </div>
              </div>
              {/* MEssage item user */}
              <div className=" flex flex-col items-end">
                <div className="flex gap-2 mb-1">
                  <p className="text-xs font-medium text-white">John Doe</p>
                  <p className="text-xs font-medium text-white/70">10:30</p>
                </div>
                <div className="bg-white/30 px-4 py-2 rounded-xl max-w-[70%] text-sm ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  debitis labore atque, deserunt, velit vitae aut repudiandae
                  quae quasi quas commodi impedit tempora similique, nisi
                  quisquam. Placeat veniam dolore ad doloribus. Impedit velit,
                  eius repellat, sit corporis repellendus quaerat quae porro
                  molestias iusto ex rem quos soluta. Laboriosam adipisci qui,
                  laudantium dolor, voluptatum dolore perspiciatis eligendi
                  placeat illum voluptas laborum hic impedit. Porro, in
                  voluptate numquam deserunt necessitatibus minima, maxime non
                  aliquid delectus quia quas sit sequi dignissimos, eligendi
                  sapiente voluptatem cum quaerat esse ad nisi. Architecto animi
                  ex reprehenderit labore? Mollitia ipsa molestias sapiente,
                  earum omnis officiis fugiat a rem cumque velit magni,
                  architecto, laborum quaerat. Eius, ducimus quisquam laboriosam
                  ab minus molestiae voluptates ratione omnis quasi distinctio
                  sunt nobis libero dolorem beatae cupiditate deleniti
                  asperiores laborum at error, aliquid repellendus excepturi quo
                  exercitationem dolorum. Quisquam tempora animi sit eum,
                  reiciendis ut fuga, illum natus ratione sed vero quam sunt
                  voluptatem repellat accusamus quos rem! Rem cupiditate error a
                  consectetur tempore non magnam accusantium vitae consequuntur
                  commodi adipisci reprehenderit quia hic laudantium maiores
                  aperiam qui incidunt iste, esse tempora deserunt blanditiis
                  aliquam. Nesciunt quo aut itaque? Quod magnam blanditiis
                  omnis, id provident vitae debitis?Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. debitis labore atque, deserunt,
                  velit vitae aut repudiandae quae quasi quas commodi impedit
                  tempora similique, nisi quisquam. Placeat veniam dolore ad
                  doloribus. Impedit velit, eius repellat, sit corporis
                  repellendus quaerat quae porro molestias iusto ex rem quos
                  soluta. Laboriosam adipisci qui, laudantium dolor, voluptatum
                  dolore perspiciatis eligendi placeat illum voluptas laborum
                  hic impedit. Porro, in voluptate numquam deserunt
                  necessitatibus minima, maxime non aliquid delectus quia quas
                  sit sequi dignissimos, eligendi sapiente voluptatem cum
                  quaerat esse ad nisi. Architecto animi ex reprehenderit
                  labore? Mollitia ipsa molestias sapiente, earum omnis officiis
                  fugiat a rem cumque velit magni, architecto, laborum quaerat.
                  Eius, ducimus quisquam laboriosam ab minus molestiae
                  voluptates ratione omnis quasi distinctio sunt nobis libero
                  dolorem beatae cupiditate deleniti asperiores laborum at
                  error, aliquid repellendus excepturi quo exercitationem
                  dolorum. Quisquam tempora animi sit eum, reiciendis ut fuga,
                  illum natus ratione sed vero quam sunt voluptatem repellat
                  accusamus quos rem! Rem cupiditate error a consectetur tempore
                  non magnam accusantium vitae consequuntur commodi adipisci
                  reprehenderit quia hic laudantium maiores aperiam qui incidunt
                  iste, esse tempora deserunt blanditiis aliquam. Nesciunt quo
                  aut itaque? Quod magnam blanditiis omnis, id provident vitae
                  debitis?Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. debitis labore atque, deserunt, velit vitae aut
                  repudiandae quae quasi quas commodi impedit tempora similique,
                  nisi quisquam. Placeat veniam dolore ad doloribus. Impedit
                  velit, eius repellat, sit corporis repellendus quaerat quae
                  porro molestias iusto ex rem quos soluta. Laboriosam adipisci
                  qui, laudantium dolor, voluptatum dolore perspiciatis eligendi
                  placeat illum voluptas laborum hic impedit. Porro, in
                  voluptate numquam deserunt necessitatibus minima, maxime non
                  aliquid delectus quia quas sit sequi dignissimos, eligendi
                  sapiente voluptatem cum quaerat esse ad nisi. Architecto animi
                  ex reprehenderit labore? Mollitia ipsa molestias sapiente,
                  earum omnis officiis fugiat a rem cumque velit magni,
                  architecto, laborum quaerat. Eius, ducimus quisquam laboriosam
                  ab minus molestiae voluptates ratione omnis quasi distinctio
                  sunt nobis libero dolorem beatae cupiditate deleniti
                  asperiores laborum at error, aliquid repellendus excepturi quo
                  exercitationem dolorum. Quisquam tempora animi sit eum,
                  reiciendis ut fuga, illum natus ratione sed vero quam sunt
                  voluptatem repellat accusamus quos rem! Rem cupiditate error a
                  consectetur tempore non magnam accusantium vitae consequuntur
                  commodi adipisci reprehenderit quia hic laudantium maiores
                  aperiam qui incidunt iste, esse tempora deserunt blanditiis
                  aliquam. Nesciunt quo aut itaque? Quod magnam blanditiis
                  omnis, id provident vitae debitis?Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. debitis labore atque, deserunt,
                  velit vitae aut repudiandae quae quasi quas commodi impedit
                  tempora similique, nisi quisquam. Placeat veniam dolore ad
                  doloribus. Impedit velit, eius repellat, sit corporis
                  repellendus quaerat quae porro molestias iusto ex rem quos
                  soluta. Laboriosam adipisci qui, laudantium dolor, voluptatum
                  dolore perspiciatis eligendi placeat illum voluptas laborum
                  hic impedit. Porro, in voluptate numquam deserunt
                  necessitatibus minima, maxime non aliquid delectus quia quas
                  sit sequi dignissimos, eligendi sapiente voluptatem cum
                  quaerat esse ad nisi. Architecto animi ex reprehenderit
                  labore? Mollitia ipsa molestias sapiente, earum omnis officiis
                  fugiat a rem cumque velit magni, architecto, laborum quaerat.
                  Eius, ducimus quisquam laboriosam ab minus molestiae
                  voluptates ratione omnis quasi distinctio sunt nobis libero
                  dolorem beatae cupiditate deleniti asperiores laborum at
                  error, aliquid repellendus excepturi quo exercitationem
                  dolorum. Quisquam tempora animi sit eum, reiciendis ut fuga,
                  illum natus ratione sed vero quam sunt voluptatem repellat
                  accusamus quos rem! Rem cupiditate error a consectetur tempore
                  non magnam accusantium vitae consequuntur commodi adipisci
                  reprehenderit quia hic laudantium maiores aperiam qui incidunt
                  iste, esse tempora deserunt blanditiis aliquam. Nesciunt quo
                  aut itaque? Quod magnam blanditiis omnis, id provident vitae
                  debitis?
                </div>
              </div>
            </div>
          </div>
          <div className="bg-transparent  absolute bottom-8 left-0 z-10 w-full px-4">
            <div className=" h-[50px] rounded-2xl bg-white/20 flex">
              <input
                type="text"
                className="flex-1 bg-transparent outline-none px-4"
                placeholder="Escriba un mensaje..."
              />
              <div className="flex items-center pr-2">
                <button className="bg-primary h-10 w-10 rounded-2xl flex justify-center items-center">
                  <Send color="#fff" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-[312px] bg-black p-4 rounded-tr-2xl rounded-br-2xl">
          <div>
            <h3 className="text-lg font-medium">Profile</h3>
          </div>
          <div className="flex flex-col items-center gap-2 py-4">
            <img
              src="https://github.com/zerok06.png"
              className="rounded-full h-20 w-20"
              alt=""
            />
            <div>
              <h4 className="text-sm font-medium">John Doe</h4>
              <p className="text-xs text-white/70">@johndoe</p>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}

export default Messages
