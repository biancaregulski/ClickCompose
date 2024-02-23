import { Chord } from '../Chord'

interface WorkspaceChordProps {
  chord: Chord
}

const WorkspaceChord = ({ chord }: WorkspaceChordProps) => {
  return (
    <div className='chord-box'>
      <button>♫</button>
      <button>X</button>
      <h4>{chord.getChordName()}</h4>
    </div>
  )
}

export default WorkspaceChord
