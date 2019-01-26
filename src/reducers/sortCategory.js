const sortCategory = (state = "DATE_CREATED_ASCENDING", action) => {
  switch (action.type) {
    case 'SET_SORT_CATEGORY':
      return action.sort
    default:
      return state
  }
}

export default sortCategory
