import moment from 'moment'

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          dateCreated: moment(),
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'SET_DUE_DATE':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, dateDue: action.date}
          : todo
      )
    default:
      return state
  }
}

export default todos
