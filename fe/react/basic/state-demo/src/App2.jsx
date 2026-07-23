import {
  useState
} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const addCount = () => {
    // setCount(count + 1); // 修改状态 异步
    // console.log(count); // 同步 0
    // setCount(count + 1); 
    // setCount(count + 1); 
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  }
  return (
    <>
      <p>当前计数: {count}</p>
      <button onClick={addCount}>+3</button>
    </>
  )
}

export default App
