import { useState, useEffect, useRef } from 'react';
import './App.css';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: number;
}

type FilterType = 'all' | 'active' | 'completed';

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('react-todo-app-data');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');
  const [removingIds, setRemovingIds] = useState<Set<number>>(new Set());
  const [addingId, setAddingId] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    localStorage.setItem('react-todo-app-data', JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const stats = {
    total: todos.length,
    completed: todos.filter((t) => t.completed).length,
    active: todos.filter((t) => !t.completed).length,
  };

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    const newTodo: Todo = {
      id: Date.now(),
      text: trimmed,
      completed: false,
      createdAt: Date.now(),
    };
    setTodos((prev) => [newTodo, ...prev]);
    setInputValue('');
    setAddingId(newTodo.id);
    setTimeout(() => setAddingId(null), 500);
    inputRef.current?.focus();
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setRemovingIds((prev) => new Set(prev).add(id));
    setTimeout(() => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
      setRemovingIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }, 400);
  };

  const clearCompleted = () => {
    const completedIds = todos.filter((t) => t.completed).map((t) => t.id);
    completedIds.forEach((id) => {
      setRemovingIds((prev) => new Set(prev).add(id));
    });
    setTimeout(() => {
      setTodos((prev) => prev.filter((todo) => !todo.completed));
      setRemovingIds(new Set());
    }, 400);
  };

  return (
    <div className="app-wrapper">
      <div className="todo-card">
        <div className="card-header">
          <h1 className="app-title">
            <span className="title-icon">✅</span>
            Todo List
          </h1>
          <p className="app-subtitle">管理你的日常任务</p>
        </div>

        <form className="todo-form" onSubmit={addTodo}>
          <input
            ref={inputRef}
            type="text"
            className="todo-input"
            placeholder="输入一个新任务..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            autoFocus
          />
          <button type="submit" className="add-btn" disabled={!inputValue.trim()}>
            <span className="plus-icon">+</span>
            添加
          </button>
        </form>

        <div className="filter-bar">
          {(['all', 'active', 'completed'] as FilterType[]).map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? '全部' : f === 'active' ? '进行中' : '已完成'}
              <span className="filter-count">
                {f === 'all'
                  ? stats.total
                  : f === 'active'
                  ? stats.active
                  : stats.completed}
              </span>
            </button>
          ))}
        </div>

        <ul className="todo-list">
          {filteredTodos.length === 0 ? (
            <li className="empty-state">
              <span className="empty-icon">📝</span>
              <p>暂无任务</p>
              <span className="empty-hint">
                {filter === 'all'
                  ? '添加你的第一个任务吧！'
                  : filter === 'active'
                  ? '所有任务都已完成！'
                  : '还没有已完成的任务'}
              </span>
            </li>
          ) : (
            filteredTodos.map((todo) => (
              <li
                key={todo.id}
                className={`todo-item ${todo.completed ? 'completed' : ''} ${
                  removingIds.has(todo.id) ? 'removing' : ''
                } ${addingId === todo.id ? 'adding' : ''}`}
              >
                <label className="todo-label">
                  <input
                    type="checkbox"
                    className="todo-checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <span className="checkmark">
                    <svg viewBox="0 0 24 24" className="check-icon">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="todo-text">{todo.text}</span>
                </label>
                <button
                  className="delete-btn"
                  onClick={() => deleteTodo(todo.id)}
                  title="删除"
                >
                  <svg viewBox="0 0 24 24" className="delete-icon">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                  </svg>
                </button>
              </li>
            ))
          )}
        </ul>

        {todos.length > 0 && (
          <div className="card-footer">
            <div className="stats">
              <div className="stat-item">
                <span className="stat-value">{stats.total}</span>
                <span className="stat-label">总计</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item active-stat">
                <span className="stat-value">{stats.active}</span>
                <span className="stat-label">进行中</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item completed-stat">
                <span className="stat-value">{stats.completed}</span>
                <span className="stat-label">已完成</span>
              </div>
            </div>
            {stats.completed > 0 && (
              <button className="clear-btn" onClick={clearCompleted}>
                清除已完成
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
