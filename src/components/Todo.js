import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import moment from 'moment'

import { SingleDatePicker } from 'react-dates'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import './datepicker.css' //override css for Date Picker

class Todo extends Component {
  constructor() {
    super()

    this.state = {
      focused: null
    }
  }

  render() {
    const { onClick, completed, text, dateDue, setDueDate, id } = this.props

    return (
      <div className="todo-wrapper">
        <div className="todo-left-wrapper" onClick={onClick}>
          <div className={classnames("todo-box", {"completed": completed})}>
            {completed && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>}
          </div>
          <li className={classnames("todo", {"completed": completed})}>
            {text}
          </li>
        </div>
        <div className={classnames("todo-right-wrapper", {"todo-overdue": !completed && moment().startOf('day').diff(dateDue, 'days') > 0}, {"todo-due-today": !completed && !!dateDue && moment().startOf('day').diff(dateDue, 'days') === 0})}>
          {
            <SingleDatePicker
              showDefaultInputIcon
              placeholder=""
              noBorder
              small
              displayFormat="MMM DD"
              disabled={completed}
              numberOfMonths={1}
              date={dateDue} // momentPropTypes.momentObj or null
              onDateChange={date => setDueDate(id, date)} // PropTypes.func.isRequired
              focused={this.state.focused} // PropTypes.bool
              onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
              id="task-due-date" // PropTypes.string.isRequired,
            />
          }
        </div>

      </div>
    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  dateCreated: PropTypes.object.isRequired
}

export default Todo