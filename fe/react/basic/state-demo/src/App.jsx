import {
  useState
} from 'react';
// 重的，耗时的计算
function heavyComputation() {
  console.log('开始执行 heavyComputation...');
  // 网页性能优化指标  performance  性能表现 api 
  const startTime = performance.now(); // 当前时间
  const result = [];
  for (let i = 0; i < 10000; i++) {
    result.push({id: i, name: `用户${i}`});
  }
  const duration = performance.now() - startTime;
  console.log(`heavyComputation 执行耗时: ${duration}ms`);
  return result;
}
function App() {
  //   const [users] = useState([
  //     {id: 1,name: '张三'},
  //     {id: 2,name: '李四'},  
  //   ])
  // 状态的初始值，不是直接给的，可能要经过计算，
  // useState(函数) 
  // const [users] = useState(heavyComputation());.。。。。。。
  const [users] = useState(() => heavyComputation());
  const [filterText, setFilterText] = useState('');
  // 数据状态 state, props, computed 计算属性
  const filteredUsers = users.filter(user => user.name.includes(filterText));
  return (
    <div style={{ padding: '20px' }}>
        <h2>用户列表</h2>
        <input type="text"
               placeholder="输入用户名过滤"
               value={filterText}
               onChange={e => setFilterText(e.target.value)}
        />
        <p>当前显示 {filteredUsers.length} 个用户</p>
        <ul style={{maxHeight: '300px', overflowY: 'auto'}}>
            {
                filteredUsers.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default App
