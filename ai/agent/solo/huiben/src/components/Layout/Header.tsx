import { Search, Bell, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center shadow-cute">
              <span className="text-white font-cute font-bold text-lg">绘</span>
            </div>
            <div>
              <h1 className="text-xl font-cute font-bold text-primary-600">绘本岛</h1>
              <p className="text-xs text-gray-500">让亲子时光更温暖一点</p>
            </div>
          </div>

          {/* 搜索栏 */}
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="搜索绘本、活动..."
                className="w-full pl-10 pr-4 py-2 bg-accent-50 border border-accent-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent text-sm"
              />
            </div>
          </div>

          {/* 用户操作 */}
          <div className="flex items-center space-x-3">
            <button className="relative p-2 text-gray-600 hover:text-primary-600 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">1</span>
            </button>
            <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}