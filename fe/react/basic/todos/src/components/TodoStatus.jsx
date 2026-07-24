const TodoStatus = ({total, active, completed, onClearCompleted}) => {
  return (
    <div className="todo-status">
      <p>Total: {total} | Active: {active} | Completed: {completed}</p>
      {
        completed > 0 && (
          <button 
          onClick={onClearCompleted} 
          className="clear-btn">
          Clear Completed
          </button>
        )
      }
    </div>
  )
}

export default TodoStatus
