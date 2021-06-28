import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Issues from './component/issues.list'

const App = () => {
  return (
    <div>
      <h1>Github Issues List</h1>
      <Issues/>
    </div>
  )
}

export default App
