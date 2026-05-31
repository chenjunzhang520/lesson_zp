import {
  useState,
  useEffect
} from 'react';
export default function App() {
  const [count, setCount] = useState(0);
  console.log(count, '--------------------');
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log('Current count:', count);
  //   },1000);
  //   return () => clearInterval(timer);
  // },[])
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Current count:', count);
    },1000);
    // 不只是组件卸载执行
    // 每次effect 重新执行之前，都会执行上一次的清理函数
    return () => clearInterval(timer);
  },[count])
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>count+ 1</button>
    </>
  )
}