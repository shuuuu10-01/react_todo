import React from "react";
import './style.scss';

import { RootState } from '../../store/store'
import { useSelector, useDispatch } from 'react-redux'

import { changeFilter } from '../../features/todos/filterSlice'

export const Filter :React.FC = () => {
  const filter = useSelector((state: RootState) => state.filter.filter)
  const dispatch = useDispatch()

  function handleFilter(focus: "ALL" | "TODO" | "DONE") {
    dispatch(changeFilter({filter: focus}))
  }

  return (
    <div>
      <span
        className={filter === "ALL" ? 'focus' : ''} 
        onClick={() => {handleFilter("ALL")}} 
      >
        ALL
      </span>
      &nbsp;/&nbsp;
      <span
        className={filter === "TODO" ? 'focus' : ''}
        onClick={() => {handleFilter("TODO")}}
      >
        TODO
      </span>
      &nbsp;/&nbsp;
      <span
        className={filter === "DONE" ? 'focus' : ''}
        onClick={() => {handleFilter("DONE")}}
      >
        DONE
      </span>
    </div>
  )
}
