import KeySettings from './key-settings'
import ChordsForKey from './chords-for-key'
import { GenericNote, Scale } from '../Note'
import { useState } from 'react'
import { Chord } from '../Chord'

interface KeyFormData {
  keyNote: GenericNote
  scale: Scale
  progression: string
}

interface SidebarProps {
  addChordToWorkspace: (newChord: Chord) => void
}

const Sidebar = ({ addChordToWorkspace }: SidebarProps) => {
  const [keyNote, setKeyNote] = useState<GenericNote>()
  const [scale, setScale] = useState<Scale>()

  const handleKeySettingsSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      baseKey: { value: GenericNote }
      scale: { value: Scale }
    }

    setKeyNote(target.baseKey.value)
    setScale(target.scale.value)
  }

  return (
    <div className='sidebar'>
      <KeySettings handleSubmit={handleKeySettingsSubmit} />
      {keyNote ? (
        <ChordsForKey
          addChordToWorkspace={addChordToWorkspace}
          genericNote={keyNote}
          scale={scale}
        />
      ) : null}
    </div>
  )
}

export default Sidebar
