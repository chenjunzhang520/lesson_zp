import React, { useState, useEffect } from 'react';
import PlaceInput from './components/PlaceInput';
import PhotoUploader from './components/PhotoUploader';
import SuggestionCard from './components/SuggestionCard';
import generateSuggestions from './utils/generateSuggestions';

function App() {
  // 状态管理
  const [places, setPlaces] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 从 localStorage 加载数据
  useEffect(() => {
    const savedData = localStorage.getItem('footprintDiary');
    if (savedData) {
      const { savedPlaces, savedDarkMode } = JSON.parse(savedData);
      setPlaces(savedPlaces || []);
      setIsDarkMode(savedDarkMode || false);
    }

    // 应用深色模式
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // 保存数据到 localStorage
  useEffect(() => {
    localStorage.setItem('footprintDiary', JSON.stringify({
      savedPlaces: places,
      savedDarkMode: isDarkMode
    }));
  }, [places, isDarkMode]);

  // 生成文案
  const handleGenerate = () => {
    const newSuggestions = generateSuggestions(places, photos);
    setSuggestions(newSuggestions);
  };

  // 切换深色模式
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen">
      {/* 头部 */}
      <header className="bg-white dark:bg-gray-800 shadow-sm py-4 px-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">足迹日记 · Footprint Diary</h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
            aria-label={isDarkMode ? '切换到浅色模式' : '切换到深色模式'}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      {/* 主内容 */}
      <main className="max-w-4xl mx-auto p-6">
        {/* 步骤引导 */}
        <div className="flex flex-wrap gap-4 mb-8 text-center">
          <div className="flex-1 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
            <div className="text-xl font-bold text-primary">1</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">添加地点</div>
          </div>
          <div className="flex-1 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
            <div className="text-xl font-bold text-primary">2</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">上传照片</div>
          </div>
          <div className="flex-1 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
            <div className="text-xl font-bold text-primary">3</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">生成文案</div>
          </div>
        </div>

        {/* 地点输入 */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">行程地点</h2>
          <div className="card">
            <PlaceInput places={places} setPlaces={setPlaces} />
          </div>
        </section>

        {/* 照片上传 */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">照片上传</h2>
          <div className="card">
            <PhotoUploader photos={photos} setPhotos={setPhotos} places={places} />
          </div>
        </section>

        {/* 生成文案按钮 */}
        <section className="mb-8 text-center">
          <button
            onClick={handleGenerate}
            className="btn-primary px-8 py-3 text-lg font-medium"
          >
            生成朋友圈文案
          </button>
        </section>

        {/* 文案建议 */}
        {suggestions.length > 0 && (
          <section className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">文案建议</h2>
              <button
                onClick={handleGenerate}
                className="text-sm text-primary hover:underline dark:text-blue-400"
              >
                换一批
              </button>
            </div>
            
            <div className="space-y-4">
              {suggestions.map((suggestion, index) => (
                <SuggestionCard
                  key={index}
                  suggestion={suggestion.text}
                  styleName={suggestion.style}
                />
              ))}
            </div>
          </section>
        )}
      </main>

      {/* 页脚 */}
      <footer className="bg-white dark:bg-gray-800 py-4 px-6 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>足迹日记 · Footprint Diary | 所有数据仅保存在您的浏览器中</p>
      </footer>
    </div>
  );
}

export default App;