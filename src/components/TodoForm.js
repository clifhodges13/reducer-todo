import React, { useState } from 'react'

export default function TodoForm({ dispatch }) {
  
  const [newTodo, setNewTodo] = useState({})

  const handleChange = e => {
    setNewTodo({
      item: e.target.value,
      completed: false,
      id: Date.now()
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({type: "ADD_TODO", payload: newTodo})
    setNewTodo({})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Add Todo"
          value={newTodo.item || ''}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}
