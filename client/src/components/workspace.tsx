import axios from 'axios'
import { Chord } from '../Chord'
import WorkspaceChord from './workspace-chord'

const apiCall = () => {
  axios.get('http://localhost:8080').then(data => {
    console.log(data)
  })
}

interface WorkspaceProps {
  workspaceChords: Array<Chord>
}

const Workspace = ({ workspaceChords }: WorkspaceProps) => {
  return (
    <div className='workspace'>
      <p>Workspace</p>
      <div className='chord-selection'>
        {workspaceChords.map((chord, index) => {
          return <WorkspaceChord key={index} chord={chord} />
        })}
      </div>
      {/* <button onClick={apiCall}>Make API Call</button> */}
    </div>
  )
}

export default Workspace
