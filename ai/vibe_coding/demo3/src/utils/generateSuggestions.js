// 获取当前日期的格式化字符串
const getFormattedDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
};

// 生成文艺治愈风文案
const generateLiteraryStyle = (places, photoCount) => {
  const date = getFormattedDate();
  const placeText = places.length > 0 ? places.join('、') : '城市角落';
  const photoText = photoCount > 0 ? `${photoCount}张照片` : '一些碎片';
  
  const templates = [
    `${date} ☁️
今日份的小确幸来自${placeText}
镜头定格的瞬间，都是生活的诗
${photoText}，藏着今天的温柔`
    ,
    `🌿 慢生活日记
在${placeText}度过的时光
风很轻，云很慢
把今日的美好，打包进${photoText}`
    ,
    `${date} | 日常碎片
走过${placeText}
用镜头记录每一个值得被记住的时刻
生活原本沉闷，但跑起来就有风`
    ,
    `📷 今日足迹
${placeText}
每一步都有不同的风景
${photoText}，是今天最好的礼物`
  ];
  
  return templates[Math.floor(Math.random() * templates.length)];
};

// 生成轻松幽默风文案
const generateHumorousStyle = (places, photoCount) => {
  const date = getFormattedDate();
  const placeText = places.length > 0 ? places.join('→') : '家里蹲';
  const photoText = photoCount > 0 ? `拍了${photoCount}张美照` : '没拍几张照片';
  
  const templates = [
    `${date} 🚶‍♀️
今日行程：${placeText}
${photoText}，朋友圈先P为敬
别问我为什么这么好看，问就是滤镜选得好`
    ,
    `😂 今天又出门啦！
打卡${placeText}
${photoText}，修图两小时系列
朋友圈先营业，本人后休息`
    ,
    `👣 今日份乱跑
从${placeText}路过
${photoText}，总有一张能看
生活不易，朋友圈更不易`
    ,
    `${date} | 逛吃逛吃
${placeText}
${photoText}，内存已告急
为什么好看的地方总是这么多？`
  ];
  
  return templates[Math.floor(Math.random() * templates.length)];
};

// 生成旅行博主风文案
const generateTravelStyle = (places, photoCount) => {
  const date = getFormattedDate();
  const placeText = places.length > 0 ? places.map(p => `📍${p}`).join('\n') : '📍今日探索';
  const photoCountText = photoCount > 0 ? `${photoCount}张现场实拍` : '随拍记录';
  
  const templates = [
    `【${date} 旅行日记】
${placeText}
✅ 完成今日打卡
${photoCountText}
解锁城市新地图，记录美好瞬间`
    ,
    `🚩 今日足迹分享
${placeText}
📸 ${photoCountText}
每一个地点都有独特的故事
每一张照片都是回忆的凭证`
    ,
    `【城市探索家】
${placeText}
${date}
${photoCountText}
生活需要仪式感，旅行需要记录感`
    ,
    `📍 今日打卡
${placeText}
📅 ${date}
${photoCountText}
用脚步丈量世界，用镜头记录美好`
  ];
  
  return templates[Math.floor(Math.random() * templates.length)];
};

// 生成极简生活风文案
const generateMinimalistStyle = (places, photoCount) => {
  const date = getFormattedDate();
  const placeText = places.length > 0 ? places.join('、') : '日常';
  
  const templates = [
    `${date}
${placeText}
${photoCount > 0 ? '📷' : ''}`
    ,
    `今日
${placeText}
简单生活`
    ,
    `${date} | 足迹
${placeText}`
    ,
    `日常碎片
${placeText}
${photoCount > 0 ? '记录' : ''}`
  ];
  
  return templates[Math.floor(Math.random() * templates.length)];
};

// 生成通用文案（当没有地点和照片时）
const generateGeneralSuggestions = () => {
  const date = getFormattedDate();
  
  const templates = [
    `${date} ☀️
今天没出门，但拍了窗台的光影
生活的美好，藏在细微处`
    ,
    `📖 ${date}
宅家的一天，也是充实的一天
阅读、喝茶、听音乐
简单的日子，也有简单的快乐`
    ,
    `✨ 今日小确幸
阳光正好，心情也正好
平凡的一天，也值得被记录`
    ,
    `${date} | 日常
生活不需要太多波澜
平平淡淡，也很美好`
  ];
  
  return templates[Math.floor(Math.random() * templates.length)];
};

// 主函数：生成所有风格的文案
const generateSuggestions = (places, photos) => {
  const photoCount = photos.length;
  
  // 如果没有地点和照片，生成通用文案
  if (places.length === 0 && photoCount === 0) {
    return [
      { style: '文艺治愈风', text: generateGeneralSuggestions() },
      { style: '轻松幽默风', text: generateGeneralSuggestions() },
      { style: '旅行博主风', text: generateGeneralSuggestions() },
      { style: '极简生活风', text: generateGeneralSuggestions() }
    ];
  }
  
  // 生成不同风格的文案
  return [
    { style: '文艺治愈风', text: generateLiteraryStyle(places, photoCount) },
    { style: '轻松幽默风', text: generateHumorousStyle(places, photoCount) },
    { style: '旅行博主风', text: generateTravelStyle(places, photoCount) },
    { style: '极简生活风', text: generateMinimalistStyle(places, photoCount) }
  ];
};

export default generateSuggestions;