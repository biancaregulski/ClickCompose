import React, { useState } from 'react'
import './App.css'

import Workspace from './components/workspace'
import Sidebar from './components/sidebar'
import PianoTool from './components/piano-tool'
import { Chord } from './Chord'

function App () {
  const [workspaceChords, setWorkspaceChords] = useState<Array<Chord>>([])
  function addChordToWorkspace (newChord: Chord) {
    setWorkspaceChords(currentChords => [...currentChords, newChord])
  }

  return (
    <div className='App'>
      <div className='interface'>
        <Workspace workspaceChords={workspaceChords} />
        <Sidebar
          workspaceChords={workspaceChords}
          addChordToWorkspace={addChordToWorkspace}
        />
      </div>
      <div className='piano-container'>
        <PianoTool />
      </div>
    </div>
  )
}

export default App
