import React, { useReducer } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { reducer, initialState } from '../reducers/reducer'

export default function Todos() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <TodoForm state={state} dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} />
    </div>
  )
}