import Header from '@/components/Layout/Header'
import BottomNav from '@/components/Layout/BottomNav'
import BannerCarousel from '@/components/Home/BannerCarousel'
import HotBooks from '@/components/Home/HotBooks'
import RecommendedActivities from '@/components/Home/RecommendedActivities'
import CategoryGrid from '@/components/Home/CategoryGrid'
import DailyStats from '@/components/Home/DailyStats'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-50 to-warm-50">
      <Header />
      
      <main className="container mx-auto px-4 pb-20 pt-4">
        {/* 轮播图 */}
        <section className="mb-6">
          <BannerCarousel />
        </section>

        {/* 分类导航 */}
        <section className="mb-6">
          <CategoryGrid />
        </section>

        {/* 热门绘本 */}
        <section className="mb-6">
          <HotBooks />
        </section>

        {/* 推荐活动 */}
        <section className="mb-6">
          <RecommendedActivities />
        </section>

        {/* 每日统计 */}
        <section className="mb-6">
          <DailyStats />
        </section>
      </main>

      <BottomNav />
    </div>
  )
}