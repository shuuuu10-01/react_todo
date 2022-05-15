import React, { useState } from 'react'
import TextInput from '../../components/TextInput'
import { Filter } from '../../components/Filter'

import { RootState } from '../../store/store'
import { useSelector, useDispatch } from 'react-redux'

import { addTodo } from '../../features/todos/todosSlice'

const Todo:React.FC = () => {
  const [todoText, setTodoText] = useState('')
  const todos = useSelector((state: RootState) => state.todos)
  console.log(todos, "check")

  const dispatch = useDispatch()
  const handleSubmit = () => {
    dispatch(addTodo(todoText))
    setTodoText("")
  }

  return (
    <div>
      <Filter />
      <p>{todoText}</p>
      <TextInput
        title='todo'
        type='text'
        placeholder='やりたいことを記入してください'
        value={todoText}
        onChange={(value) => setTodoText(value)}
      />
      <button onClick={() => handleSubmit()} >追加</button>
    </div>
  )
}

export default Todo
