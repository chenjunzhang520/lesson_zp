import { 
  useState 
} from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoStatus from './components/TodoStatus';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '学习react',
      completed: false
    },
    {
      id: 2,
      text: '学习AI',
      completed: false
    },
    {
      id: 3,
      text: '学习MCP',
      completed: true
    }
  ]);

  // 添加todo的方法 父组件管理
  const addTodo = (text) => {
    if (text.trim() === '') return 
      // 全新的状态
      setTodos([
        {id: + Date.now(), text, completed: false},
        ...todos
      ])
  }

  const toggleTodo = (id) => {
    // 全新的状态
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const activeCount = todos.filter(todo => !todo.completed).length;

  const completedCount = todos.length - activeCount;

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  }

  return (
    <div>
      <h1>My Todo List</h1>
      {/* 自定义事件 */}
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      <TodoStatus total={todos.length} active={activeCount} completed={completedCount} onClearCompleted={clearCompleted} />
    </div>
  )
}

export default App 
