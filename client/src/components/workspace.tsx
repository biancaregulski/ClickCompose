import axios from 'axios'
import Chord from './chord'
import KeySettings from './key-settings'

const apiCall = () => {
  axios.get('http://localhost:8080').then(data => {
    console.log(data)
  })
}

const Workspace = () => {
  return (
    <div className='workspace'>
      <p>Workspace</p>
      <div className='chord-selection'>
        <Chord />
        <Chord />
        <Chord />
      </div>
      <button onClick={apiCall}>Make API Call</button>
    </div>
  )
}

export default Workspace
