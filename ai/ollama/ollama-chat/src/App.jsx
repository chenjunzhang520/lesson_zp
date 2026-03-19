import {
  useEffect
} from 'react';
export default function App() {
  useEffect(() => {
    // api 请求在页面挂载之后
    fetch('https://api.github.com/users/shunwuyu/repos')
      .then(data => data.json())
      .then(res => {
        console.log(res);
      })
  }, [])
  return (
    <>
      App
    </>
  );
}