import UserNavBar from './UserNavBar'
import Notifications from './Notifications'

const NavBar = () => {
  return (
    <nav className="h-20  flex items-center px-6">
      <div className="flex-1"></div>
      <div className="flex items-center gap-2">
        <Notifications />
        <UserNavBar />
      </div>
    </nav>
  )
}

export default NavBar
