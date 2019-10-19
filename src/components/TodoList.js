import React from 'react'
import Todo from './Todo'

export default function TodoList({ state, dispatch }) {
  return (
    <>
      {state.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      })}
    </>
  )
}
