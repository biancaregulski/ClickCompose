import React from 'react'
import './App.css'

import Workspace from './components/workspace'
import Sidebar from './components/sidebar'
import PianoTool from './components/piano-tool'

function App () {
  return (
    <div className='App'>
      <div className='interface'>
        <Workspace />
        <Sidebar />
      </div>
      <div className='piano-container'>
        <PianoTool />
      </div>
    </div>
  )
}

export default App
