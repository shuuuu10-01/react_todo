import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Todo from '../pages/Todo'

const RouterConfig:React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterConfig;
