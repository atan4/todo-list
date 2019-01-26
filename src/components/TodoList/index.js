import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from '../Todo'
import { SortCategories } from '../../actions'

import './style.css'

class TodoList extends Component {
  constructor() {
    super()

    this.state = {
      showCompleted: false,
      sortDropdown: false
    }

    this.toggleShowCompletedTasks = this.toggleShowCompletedTasks.bind(this);
    this.toggleSortDropdown = this.toggleSortDropdown.bind(this);
    this.toggleSort = this.toggleSort.bind(this);
    this.sortDueDates = this.sortDueDates.bind(this);
  }

  toggleShowCompletedTasks() {
    this.setState(prevState => ({
      showCompleted: !prevState.showCompleted
    }))
  }

  toggleSortDropdown = () => {
    this.setState(prevState => ({
      sortDropdown: !prevState.sortDropdown
    }))
  }

  toggleSort = (e) => {
    const { setSortCategory } = this.props
    this.setState({
      sortDropdown: false
    })
    setSortCategory(e.target.id)
  }

  //returns an array of todos in sorted order, with todos w/o due dates placed first
  sortDueDates(type) {
    const { todos } = this.props
    var noDueDates = []
    var sortedTodos = []

    const sortDates = todos.map(todo => {
      if (!!todo.dateDue) return todo.dateDue //extracts due dates
      return noDueDates.push(todo)
    }).map(dateDue => {
      if (!!dateDue) return dateDue.valueOf() //sorts by epoch time
      return 0 //indicates no due date set
    })

    if (type === "DATE_DUE_DESCENDING") {
      sortDates.sort(function(a, b){return b-a}) //descending sort
    } else if (type === "DATE_DUE_ASCENDING") { 
      sortDates.sort() //ascending sort
    }

    const uniqueDueDates = [...new Set(sortDates)] //removes duplicates

    uniqueDueDates.map(time => {
      todos.map(todo => {
        if (!!todo.dateDue && todo.dateDue.valueOf() === time) {
          sortedTodos.push(todo)
        }
        return null
      })
      return null
    })

    return [...noDueDates.slice(0).reverse(), ...sortedTodos] //todos without due dates are listed in most recent order
  }

  render(){
    const { todos, toggleTodo, completedTodos, setDueDate, sortCategory } = this.props
    const { showCompleted, sortDropdown } = this.state

    return(
      <div className="todo-list-container">
        <div className="todo-list">
          <div className="todo-list-wrapper">
            <div className="todo-list-header">
            <p>ALL TASKS</p>
              <div className="todo-list-sort-wrapper">
                <p onClick={this.toggleSortDropdown} className="todo-list-sort">Sort By: {SortCategories[sortCategory]}</p>
                {sortDropdown && 
                  <ul className="todo-list-sort-dropdown">
                    {Object.keys(SortCategories).map(category => {
                      return (
                        <li id={category} key={category} onClick={this.toggleSort} className="todo-list-sort">{SortCategories[category]}</li>
                      )
                    })}
                  </ul>
                }
              </div>
            </div>
            <ul>
              {sortCategory === "DATE_CREATED_ASCENDING" && todos.slice(0).reverse().map(todo =>
                <Todo
                  key={todo.id}
                  {...todo}
                  onClick={() => toggleTodo(todo.id)}
                  setDueDate={setDueDate}
                />
              )}
              {sortCategory === "DATE_CREATED_DESCENDING" && todos.map(todo =>
                <Todo
                  key={todo.id}
                  {...todo}
                  onClick={() => toggleTodo(todo.id)}
                  setDueDate={setDueDate}
                />
              )}
              {sortCategory === "DATE_DUE_DESCENDING" && this.sortDueDates("DATE_DUE_DESCENDING").map(todo => {
                return <Todo
                  key={todo.id}
                  {...todo}
                  onClick={() => toggleTodo(todo.id)}
                  setDueDate={setDueDate}
                />
              })}
              {sortCategory === "DATE_DUE_ASCENDING" && this.sortDueDates("DATE_DUE_ASCENDING").map(todo => {
                return <Todo
                  key={todo.id}
                  {...todo}
                  onClick={() => toggleTodo(todo.id)}
                  setDueDate={setDueDate}
                />
              })}
            </ul>
          </div>
        </div>
        {(!!completedTodos.length) && 
          <div className="todo-list">
            <div className="todo-list-wrapper todo-list-completed-wrapper">
              <span className="show-completed" onClick={this.toggleShowCompletedTasks}>SHOW COMPLETED TASKS: </span>
              {showCompleted &&
                completedTodos.slice(0).reverse().map(todo =>
                  <Todo
                    key={todo.id}
                    {...todo}
                    onClick={() => toggleTodo(todo.id)}
                    setDueDate={setDueDate}
                  />
                )
              }
            </div>
          </div>
        }
      </div>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    dateCreated: PropTypes.object.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  setDueDate: PropTypes.func.isRequired
}

export default TodoList
