import { connect } from 'react-redux'
import { toggleTodo, setDueDate, setSortCategory } from '../actions'
import TodoList from '../components/TodoList/'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, VisibilityFilters.SHOW_ACTIVE),
  completedTodos: getVisibleTodos(state.todos, VisibilityFilters.SHOW_COMPLETED),
  sortCategory: state.sortCategory
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  setDueDate: (id, date) => dispatch(setDueDate(id, date)),
  setSortCategory: sort => dispatch(setSortCategory(sort))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
