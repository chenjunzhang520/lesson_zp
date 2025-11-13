import { Book, Star, Clock } from 'lucide-react'

const books = [
  {
    id: 1,
    title: '小熊宝宝绘本系列',
    author: '佐佐木洋子',
    cover: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Cute%20little%20bear%20character%20illustration%2C%20soft%20pastel%20colors%2C%20children%27s%20book%20cover%20style%2C%20warm%20and%20friendly%20expression%2C%20simple%20and%20adorable%20design%2C%20white%20background&image_size=square',
    rating: 4.8,
    age: '0-3岁',
    tags: ['情绪管理', '生活习惯']
  },
  {
    id: 2,
    title: '好饿的毛毛虫',
    author: '艾瑞·卡尔',
    cover: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Colorful%20caterpillar%20illustration%2C%20bright%20vibrant%20colors%2C%20children%27s%20book%20style%2C%20cute%20and%20friendly%20caterpillar%2C%20whimsical%20design%2C%20white%20background&image_size=square',
    rating: 4.9,
    age: '2-6岁',
    tags: ['认知', '创意']
  },
  {
    id: 3,
    title: '猜猜我有多爱你',
    author: '山姆·麦克布雷尼',
    cover: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Two%20cute%20rabbits%20showing%20love%2C%20soft%20pastel%20colors%2C%20children%27s%20book%20illustration%2C%20warm%20and%20tender%20atmosphere%2C%20gentle%20expressions%2C%20white%20background&image_size=square',
    rating: 4.9,
    age: '3-8岁',
    tags: ['亲情', '情感']
  },
  {
    id: 4,
    title: '大卫不可以',
    author: '大卫·香农',
    cover: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Mischievous%20little%20boy%20character%2C%20colorful%20illustration%2C%20children%27s%20book%20style%2C%20playful%20and%20energetic%2C%20expressive%20character%2C%20white%20background&image_size=square',
    rating: 4.7,
    age: '3-7岁',
    tags: ['行为规范', '幽默']
  }
]

export default function HotBooks() {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-soft">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-cute font-bold text-gray-800 flex items-center">
          <Book className="w-5 h-5 mr-2 text-primary-500" />
          热门绘本
        </h3>
        <button className="text-primary-600 text-sm font-medium hover:text-primary-700">
          查看更多
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {books.map((book) => (
          <div key={book.id} className="bg-gradient-to-br from-accent-50 to-white rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group">
            <div className="relative mb-3">
              <img 
                src={book.cover} 
                alt={book.title}
                className="w-full h-32 object-cover rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute top-2 right-2 bg-white bg-opacity-90 rounded-full px-2 py-1 flex items-center">
                <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                <span className="text-xs font-medium text-gray-700">{book.rating}</span>
              </div>
            </div>
            
            <h4 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-2">{book.title}</h4>
            <p className="text-xs text-gray-500 mb-2">{book.author}</p>
            
            <div className="flex items-center justify-between">
              <span className="text-xs bg-secondary-100 text-secondary-700 px-2 py-1 rounded-full">
                {book.age}
              </span>
              <button className="text-primary-600 hover:text-primary-700 transition-colors">
                <Book className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex flex-wrap gap-1 mt-2">
              {book.tags.map((tag, index) => (
                <span key={index} className="text-xs bg-warm-100 text-warm-700 px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}