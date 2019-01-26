import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import listName from './listName'
import sortCategory from './sortCategory'

const appReducer = combineReducers({
  todos,
  visibilityFilter,
  listName,
  sortCategory
})

export const rootReducer = (state, action) => {
  if (action.type === 'START_OVER') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer