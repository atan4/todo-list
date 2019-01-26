import React from 'react'
import { connect } from 'react-redux'
import { setListName } from '../actions'

const mapStateToProps = state => ({
  listName: state.listName
})

const SetListName = ({ listName, dispatch }) => (
  <div>
    <input
      className="list-name"
      value={listName}
      onChange={(event) => dispatch(setListName(event.target.value))}
      style={{
        width: listName.length*7.5 + 5, //5px as a buffer while it expands
        minWidth: "25px"
      }}
    />
    <svg className="edit-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 512 512">
      <path d="M432 0c44.182 0 80 35.817 80 80 0 18.010-5.955 34.629-16 48l-32 32-112-112 32-32c13.371-10.045 29.989-16 48-16zM32 368l-32 144 144-32 296-296-112-112-296 296zM357.789 181.789l-224 224-27.578-27.578 224-224 27.578 27.578z"></path>
    </svg>
  </div>
)

export default connect(mapStateToProps)(SetListName)
