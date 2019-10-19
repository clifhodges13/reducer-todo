import React, { useState } from 'react'

export default function Todo({ todo, dispatch }) {

  const [isComplete, setIsComplete] = useState(false)

  const handleClick = e => {
    e.preventDefault()
    setIsComplete(!isComplete)
    // dispatch({type: "TOGGLE_COMPLETED", payload: todo.id})
  }

  return (
    <div onClick={handleClick} className={`todo-item ${isComplete ? 'completed' : ''}`}>
      <h3>{todo.item}</h3>
    </div>
  )
}
