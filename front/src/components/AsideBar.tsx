import { Comment01Icon } from './icons/Comment01Icon'
import { Home01Icon } from './icons/Home01Icon'
import { UserIcon } from './icons/UserIcon'
import { YoutubeIcon } from './icons/YoutubeIcon'

const item = [
  {
    id: '905b8c8b-65a8-4496-9af8-e8cb96c02bf9',
    name: 'Profile',
    href: '#',
    label: 'profile',
    icon: <UserIcon />,
  },
  {
    id: '34011586-02a8-4586-93d9-9c4ec740f686',
    name: 'Video',
    href: '/videos',
    label: 'Video',
    icon: <YoutubeIcon />,
  },
  {
    id: '4899e3cf-ef03-461b-9aff-945c2d658e88',
    name: 'Feed',
    href: '#',
    label: 'Feed',
    icon: <Comment01Icon />,
  },
]

interface ItemAsideProps {
  id: string
  name: string
  href: string
  label: string
  icon: React.ReactNode
}

const ItemAside: React.FC<ItemAsideProps> = ({
  href,
  icon,
  id,
  label,
  name,
}) => {
  return (
    <a
      href={href}
      title={name}
      className="h-10 w-10 rounded-full hover:bg-white/20 flex justify-center items-center transition-colors duration-300"
    >
      {icon}
    </a>
  )
}

const AsideBar = () => {
  return (
    <div className="flex flex-col justify-between items-center pt-8 w-[150px] gap-4 pb-6 h-svh sticky top-0">
      <div>LOgo</div>
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col gap-6">
          <div className="flex">
            <a
              href="#"
              title="Home"
              className="h-14 w-14 rounded-full bg-primary flex justify-center items-center"
            >
              <Home01Icon />
            </a>
          </div>
          <div className="flex p-3 bg-white/5 rounded-full flex-col gap-1">
            {item.map(item => (
              <ItemAside {...item} key={item.id} />
            ))}
          </div>
          <div></div>
        </div>
        <div>
          <a
            href="#"
            title="Home"
            className="h-14 w-14 rounded-full bg-primary flex justify-center items-center"
          >
            <Home01Icon />
          </a>
        </div>
      </div>
    </div>
  )
}

export default AsideBar
