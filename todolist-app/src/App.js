import React from 'react'
import Todo from './TodoList/Todo'
import { withTranslate } from 'react-redux-multilingual'

const App = () => {
  return (
    <div>
      <Todo />
      <footer>
      
      </footer>
    </div>
  )
}

export default withTranslate(App)