import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface todoItem {
  title: string,
  done: boolean
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [{
    title: "first",
    done: false
  }] as todoItem[],
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const setItem = {
        title: action.payload,
        done: false
      } as todoItem
      state.push(setItem)
      console.log(state)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTodo } = todosSlice.actions

export const todosReducer = todosSlice.reducer
