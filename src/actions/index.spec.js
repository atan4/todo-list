import * as actions from './index'
import moment from 'moment'

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('Use Redux')).toEqual({
      type: 'ADD_TODO',
      id: 0,
      text: 'Use Redux',
      dateCreated: moment()
    })
  })

  it('setListName should create SET_LIST_NAME action', () => {
    expect(actions.setListName('Things to do before graduating')).toEqual({
      type: 'SET_LIST_NAME',
      text: 'Things to do before graduating'
    })
  })

  it('setDueDate should create SET_DUE_DATE action', () => {
    expect(actions.setDueDate(1, moment())).toEqual({
      type: 'SET_DUE_DATE',
      date: moment(),
      id: 1
    })
  })

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    })
  })

  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(actions.toggleTodo(1)).toEqual({
      type: 'TOGGLE_TODO',
      id: 1
    })
  })

  it('setSortCategory should create SET_SORT_CATEGORY action', () => {
    expect(actions.setSortCategory('DATE_CREATED_ASCENDING')).toEqual({
      type: 'SET_SORT_CATEGORY',
      sort: 'DATE_CREATED_ASCENDING'
    })
  })

})