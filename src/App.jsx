import { useState } from 'react'
import {UseState} from './UseState'
import { UseReducer } from './useReducer'
import './App.css'

function App() {

  return (
    <>
    <div className='App'>
      <UseState name='Use State'/>
      <UseReducer name='Use Reducer'/>
    </div>
    </>
  )
}

export default App
