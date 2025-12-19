import {
  useState
} from 'react';

export default function App() {
  // 数据 ->  setNum  变成另一个数据值，值不是固定的了，状态state
  // hook useState 为程序带来了关键的响应式状态
  // 状态是变化的数据，组件的核心是状态
  // 1 数据 也是状态的初始值
  const [num, setNum] = useState(1);
  return (
    <div>

    </div>
  )
}