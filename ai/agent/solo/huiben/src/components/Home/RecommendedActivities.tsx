import { MapPin, Clock, Users, Star } from 'lucide-react'

const activities = [
  {
    id: 1,
    title: '绘本故事会《好饿的毛毛虫》',
    location: '北京市朝阳区',
    time: '2024-01-20 10:00',
    price: '免费',
    participants: 15,
    maxParticipants: 20,
    rating: 4.8,
    image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Children%20gathered%20in%20a%20circle%20listening%20to%20storytelling%2C%20colorful%20cushions%20and%20books%20around%2C%20warm%20lighting%2C%20cozy%20library%20setting%2C%20children%27s%20illustration%20style%2C%20happy%20expressions&image_size=landscape_4_3',
    tags: ['故事会', '3-6岁']
  },
  {
    id: 2,
    title: '亲子手工课-制作小书包',
    location: '上海市浦东新区',
    time: '2024-01-21 14:00',
    price: '¥68',
    participants: 8,
    maxParticipants: 12,
    rating: 4.9,
    image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Parents%20and%20children%20doing%20crafts%20together%2C%20colorful%20fabric%20and%20buttons%2C%20happy%20faces%2C%20creative%20atmosphere%2C%20children%27s%20illustration%20style%2C%20warm%20colors%2C%20craft%20supplies%20scattered&image_size=landscape_4_3',
    tags: ['手工', '4-8岁']
  },
  {
    id: 3,
    title: '户外亲子运动会',
    location: '深圳市南山区',
    time: '2024-01-22 09:30',
    price: '¥128',
    participants: 25,
    maxParticipants: 30,
    rating: 4.7,
    image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Children%20and%20parents%20playing%20outdoor%20games%2C%20green%20grass%2C%20colorful%20sports%20equipment%2C%20sunny%20day%2C%20happy%20faces%2C%20children%27s%20illustration%20style%2C%20energetic%20atmosphere%2C%20blue%20sky&image_size=landscape_4_3',
    tags: ['运动', '3-10岁']
  }
]

export default function RecommendedActivities() {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-soft">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-cute font-bold text-gray-800 flex items-center">
          <MapPin className="w-5 h-5 mr-2 text-primary-500" />
          推荐活动
        </h3>
        <button className="text-primary-600 text-sm font-medium hover:text-primary-700">
          查看更多
        </button>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="bg-gradient-to-r from-accent-50 to-white rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer">
            <div className="flex space-x-3">
              <img 
                src={activity.image} 
                alt={activity.title}
                className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-800 text-sm mb-2 line-clamp-2">{activity.title}</h4>
                
                <div className="space-y-1 mb-2">
                  <div className="flex items-center text-xs text-gray-600">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span className="truncate">{activity.location}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{activity.time}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold text-primary-600">{activity.price}</span>
                    <div className="flex items-center text-xs text-gray-500">
                      <Users className="w-3 h-3 mr-1" />
                      <span>{activity.participants}/{activity.maxParticipants}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                    <span className="text-xs text-gray-600">{activity.rating}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mt-2">
                  {activity.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-secondary-100 text-secondary-700 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}