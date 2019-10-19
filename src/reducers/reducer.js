export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    item: 'Work Please',
    completed: false,
    id: Date.now()
  },
  {
    item: 'Seriously',
    completed: false,
    id: Date.now() + 100
  }
]

export function reducer(state, action) {
  switch(action.type) {
    case "ADD_TODO":
      return [
        ...state,
        action.payload
      ];
    case "TOGGLE_COMPLETED":
      const newState = state.map(todo => {
        if(todo.id === action.payload.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo
        }
      })
      return newState
    case "REMOVE_COMPLETED":
      const updateState = state.filter(todo => {
        if(!todo.completed) {
          return todo
        }
      })
      return updateState
    default:
      return state
  }
}