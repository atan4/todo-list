let nextTodoId = 0
export const addTodo = (text, dateCreated) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
  dateCreated
})

export const setListName = text => ({
  type: 'SET_LIST_NAME',
  text
})

export const setDueDate = (id, date) => ({
  type: 'SET_DUE_DATE',
  date,
  id
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const setSortCategory = sort => ({
  type: 'SET_SORT_CATEGORY',
  sort
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const startOver = () => ({
  type: 'START_OVER'
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const SortCategories = Object.freeze({
  "DATE_CREATED_ASCENDING": "Newest",
  "DATE_CREATED_DESCENDING": "Oldest",
  "DATE_DUE_ASCENDING": "Date Due (Ascending)",
  "DATE_DUE_DESCENDING": "Date Due (Descending)"
})