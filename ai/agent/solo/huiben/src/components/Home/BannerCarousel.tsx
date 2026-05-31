import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const banners = [
  {
    id: 1,
    title: '六一儿童节精选',
    subtitle: '精选百本优质绘本，陪伴孩子快乐成长',
    image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Children%27s%20book%20illustration%20style%2C%20warm%20and%20colorful%2C%20happy%20children%20reading%20books%20together%20under%20a%20big%20tree%2C%20soft%20pastel%20colors%2C%20whimsical%20and%20dreamy%20atmosphere&image_size=landscape_16_9',
    color: 'from-primary-400 to-primary-600'
  },
  {
    id: 2,
    title: '亲子阅读打卡',
    subtitle: '每天十分钟，绘出成长的奇妙旅程',
    image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Parent%20and%20child%20reading%20together%20illustration%2C%20cozy%20bedroom%20setting%2C%20soft%20lighting%2C%20warm%20colors%2C%20picture%20books%20scattered%20around%2C%20loving%20atmosphere%2C%20children%27s%20book%20art%20style&image_size=landscape_16_9',
    color: 'from-secondary-400 to-secondary-600'
  },
  {
    id: 3,
    title: '周末亲子活动',
    subtitle: '精彩活动等你参与，共度美好亲子时光',
    image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Children%20and%20parents%20doing%20crafts%20together%2C%20colorful%20art%20supplies%2C%20happy%20faces%2C%20bright%20and%20cheerful%20atmosphere%2C%20children%27s%20illustration%20style%2C%20warm%20lighting%2C%20playful%20setting&image_size=landscape_16_9',
    color: 'from-warm-400 to-warm-600'
  }
]

export default function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }

  return (
    <div className="relative w-full h-48 rounded-2xl overflow-hidden shadow-cute">
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {banners.map((banner) => (
          <div key={banner.id} className="w-full h-full flex-shrink-0 relative">
            <img 
              src={banner.image} 
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${banner.color} opacity-80`}></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
              <h2 className="text-2xl font-cute font-bold mb-2 animate-float">{banner.title}</h2>
              <p className="text-sm opacity-90">{banner.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* 导航按钮 */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all"
      >
        <ChevronLeft className="w-4 h-4 text-gray-600" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all"
      >
        <ChevronRight className="w-4 h-4 text-gray-600" />
      </button>

      {/* 指示器 */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-6' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}