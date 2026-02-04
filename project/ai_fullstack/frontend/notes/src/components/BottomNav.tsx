import { Home, User } from 'lucide-react'; // 图标字体库
import {
  useNavigate,
  useLocation
} from 'react-router-dom';

export default function BottomNav() {
  const navigate  = useNavigate();
  const { pathname } = useLocation();
  // console.log(location, '/////');
  const tabs = [
    {
      label: "首页",
      path: "/",
      icon: Home
    },
    {
      label: "我的",
      path: "/mine",
      icon: User
    }
  ]

  const handleNav = (path: string) => {
    if (path === pathname) {
      return;
    }
    navigate(path);
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16
    border-t bg-background flex items-center justify-around
    z-50 safe-area-bottom">
    {
      tabs.map((tab) => {
        const Icon = tab.icon;
        return (<button 
          key={tab.path}
          onClick={() => handleNav(tab.path)}
          className="flex flex-col items-center justify-center 
          w-full h-full space-y-1"
        >
          <Icon size={24} />
          <span className="text-xs font-medium">
            {tab.label}
          </span>
        </button>
      )})
    }
    </div>
  )
}