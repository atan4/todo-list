const listName = (state = "My To-Do List", action) => {
  switch (action.type) {
    case 'SET_LIST_NAME':
      return action.text
    default:
      return state
  }
}

export default listName
