import React from 'react'
import './App.css'
import String from './components/String'
import Condition from './components/condition'
import Adult from './components/Adult'
import Auth from './components/Auth'
import GetDigitsSum from './components/Additional functions'
import Event from './components/Button'
import Clock from './components/Clock'

function App() {
  return (
    <div className="App">
      <Clock />
      <String />
      <Condition />
      <Adult />
      <Auth />
      <GetDigitsSum />
      <Event />
      <div id="flex">
        <p>Hi</p>
        <p>Hi</p>
        <p>Hi</p>
      </div>
    </div>
  )
}

export default App
