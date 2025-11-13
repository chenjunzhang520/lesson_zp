import { Home, BookOpen, Calendar, Heart, User } from 'lucide-react'
import { useLocation } from 'react-router-dom'

export default function BottomNav() {
  const location = useLocation()
  
  const navItems = [
    { icon: Home, label: '首页', path: '/', active: location.pathname === '/' },
    { icon: BookOpen, label: '绘本馆', path: '/books', active: location.pathname.startsWith('/books') },
    { icon: Calendar, label: '活动', path: '/activities', active: location.pathname.startsWith('/activities') },
    { icon: Heart, label: '阅读记录', path: '/records', active: location.pathname.startsWith('/records') },
    { icon: User, label: '我的', path: '/profile', active: location.pathname.startsWith('/profile') },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-50">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`flex flex-col items-center py-2 px-3 rounded-2xl transition-all duration-200 ${
              item.active 
                ? 'text-primary-600 bg-primary-50 scale-105' 
                : 'text-gray-500 hover:text-primary-500'
            }`}
          >
            <item.icon className={`w-6 h-6 mb-1 ${item.active ? 'animate-bounce-soft' : ''}`} />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}