import requests
from bs4 import BeautifulSoup
import time
from datetime import datetime


def get_zhihu_hot_topics():
    url = "https://www.zhihu.com/hot"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    
    try:
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()
        response.encoding = 'utf-8'
        
        soup = BeautifulSoup(response.text, 'html.parser')
        
        hot_items = soup.select('.HotItem-content')[:10]
        
        current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        print(f"\n{'='*60}")
        print(f"知乎热榜 Top 10 - 更新时间: {current_time}")
        print(f"{'='*60}\n")
        
        for index, item in enumerate(hot_items, 1):
            title_elem = item.select_one('.HotItem-title')
            if title_elem:
                title = title_elem.get_text(strip=True)
                print(f"{index}. {title}")
        
        if not hot_items:
            print("未能获取热榜数据，可能需要调整选择器")
            
    except requests.RequestException as e:
        print(f"请求失败: {e}")
    except Exception as e:
        print(f"发生错误: {e}")


if __name__ == "__main__":
    print("开始监控知乎热榜 (每5分钟更新一次，按 Ctrl+C 停止)...\n")
    
    try:
        while True:
            get_zhihu_hot_topics()
            time.sleep(300)
    except KeyboardInterrupt:
        print("\n\n已停止监控")