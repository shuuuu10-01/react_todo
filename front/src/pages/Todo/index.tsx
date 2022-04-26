import React, { useState } from 'react'
import TextInput from '../../components/TextInput'

const Todo:React.FC = () => {
  const [todoText, setTodoText] = useState('')

  return (
    <form>
      <p>{todoText}</p>
      <TextInput
        title='todo'
        type='text'
        placeholder='やりたいことを記入してください'
        value={todoText}
        onChange={(value) => setTodoText(value)}
      />
      <input type="submit" value="追加"/>
    </form>
  )
}

export default Todo
