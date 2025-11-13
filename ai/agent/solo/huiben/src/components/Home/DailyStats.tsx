import { BookOpen, Users, Award, TrendingUp } from 'lucide-react'

const stats = [
  { icon: BookOpen, label: '绘本数量', value: '1,234', color: 'text-primary-600' },
  { icon: Users, label: '活跃用户', value: '5,678', color: 'text-secondary-600' },
  { icon: Award, label: '打卡天数', value: '365', color: 'text-warm-600' },
  { icon: TrendingUp, label: '成长值', value: '9,999', color: 'text-green-600' }
]

export default function DailyStats() {
  return (
    <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-4 shadow-soft">
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-3 text-center shadow-sm hover:shadow-md transition-all duration-200">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-10 flex items-center justify-center mx-auto mb-2`}>
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </div>
            <div className="text-lg font-bold text-gray-800 mb-1">{stat.value}</div>
            <div className="text-xs text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 bg-white rounded-xl p-3 text-center">
        <h4 className="font-cute font-bold text-gray-800 mb-2">今日打卡</h4>
        <p className="text-sm text-gray-600 mb-3">今天你和宝贝一起读书了吗？</p>
        <button className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-2xl font-medium hover:shadow-lg transition-all duration-200 hover:scale-105">
          立即打卡
        </button>
      </div>
    </div>
  )
}