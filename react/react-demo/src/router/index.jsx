import {
    Routes, // 前端路由总管 
    Route // 路由实例
} from 'react-router-dom';
import Home from '../pages/Home'; // 首页
import About from '../pages/About'; // 关于页

// 路由组件
export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}