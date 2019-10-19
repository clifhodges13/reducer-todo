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
       return
    default:
      return state
  }
}