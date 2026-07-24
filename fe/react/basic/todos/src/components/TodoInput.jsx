// 表单交互组件
import { useState } from 'react';

const TodoInput = ({onAdd}) => {
  console.log(onAdd);
  // 共享状态只有父组件持有
  const [inputValue, setInputValue] = useState('');
  // 当需要报告父组件的时候，执行
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(inputValue);
    setInputValue('');
  }
  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input 
      type="text" 
      value={inputValue}
      onChange={e => setInputValue(e.target.value)}
      placeholder="What needs to be done?"
      autoFocus
      />      
      <button type="submit">Add</button>
    </form>
  )
}

export default TodoInput