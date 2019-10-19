import React from 'react'
import Todo from './Todo'

export default function TodoList({ state, dispatch }) {
  
  const removeCompleted = e => {
    dispatch({type: "REMOVE_COMPLETED"})
  }

  return (
    <>
      {state.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      })}
      <button onClick={removeCompleted}>Remove completed</button>
    </>
  )
}
