import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface todoFilter {
  filter: "ALL" | "TODO" | "DONE"
}

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filter:"ALL"
  } as todoFilter,
  reducers: {
    changeFilter: (state, action:PayloadAction<todoFilter>) => {
      state.filter = action.payload.filter
    }
  },
})

export const { changeFilter } = filterSlice.actions

export const filterReducer = filterSlice.reducer
