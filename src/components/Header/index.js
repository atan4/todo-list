import { connect } from 'react-redux'
import React from 'react'
import SetListName from '../../containers/SetListName'
import AddTodo from '../../containers/AddTodo'
import { startOver } from '../../actions'
import './style.css'

const Header = ({ dispatch }) => (
  <div className="list-header">
    <h3 className="start-over" onClick={() => dispatch(startOver())}>START OVER</h3>
    <h1>LISTICLES</h1>
    <SetListName />
    <AddTodo />
  </div>
)

export default connect()(Header)
