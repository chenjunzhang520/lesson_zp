import { Heart, Palette, Music, TreePine, Users, Book } from 'lucide-react'

const categories = [
  { icon: Heart, label: '情绪管理', color: 'from-red-400 to-pink-500', count: 156 },
  { icon: Palette, label: '艺术创意', color: 'from-purple-400 to-indigo-500', count: 89 },
  { icon: Music, label: '音乐启蒙', color: 'from-blue-400 to-cyan-500', count: 67 },
  { icon: TreePine, label: '自然科普', color: 'from-green-400 to-emerald-500', count: 134 },
  { icon: Users, label: '社交能力', color: 'from-orange-400 to-red-500', count: 98 },
  { icon: Book, label: '语言发展', color: 'from-yellow-400 to-orange-500', count: 112 },
  { icon: Heart, label: '亲情关系', color: 'from-pink-400 to-rose-500', count: 76 },
  { icon: Palette, label: '生活习惯', color: 'from-teal-400 to-blue-500', count: 145 }
]

export default function CategoryGrid() {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-soft">
      <h3 className="text-lg font-cute font-bold text-gray-800 mb-4 text-center">
        绘本分类
      </h3>
      
      <div className="grid grid-cols-4 gap-3">
        {categories.map((category, index) => (
          <button
            key={index}
            className="flex flex-col items-center p-3 rounded-xl bg-gradient-to-br from-white to-accent-50 hover:shadow-md transition-all duration-200 group hover:scale-105"
          >
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-2 group-hover:animate-wiggle`}>
              <category.icon className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-medium text-gray-700 text-center mb-1">{category.label}</span>
            <span className="text-xs text-gray-500">{category.count}</span>
          </button>
        ))}
      </div>
    </div>
  )
}