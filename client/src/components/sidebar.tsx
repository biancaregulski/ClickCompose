import KeySettings from './key-settings'
import ChordsForKey, { Accidental, Note, Scale } from './chords-for-key'
import { useState } from 'react'

interface KeyFormData {
  baseKey: Note
  accidental: Accidental
  scale: Scale
  progression: string
}

const Sidebar = () => {
  const [baseKey, setBaseKey] = useState<Note>()
  const [accidental, setAccidental] = useState<Accidental>()
  const [scale, setScale] = useState<Scale>()

  const handleKeySettingsSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      baseKey: { value: Note }
      accidental: { value: Accidental }
      scale: { value: Scale }
    }

    setBaseKey(target.baseKey.value)
    setAccidental(target.accidental.value)
    setScale(target.scale.value)
  }

  return (
    <div className='sidebar'>
      <KeySettings handleSubmit={handleKeySettingsSubmit} />
      {baseKey ? (
        <ChordsForKey baseKey={baseKey} accidental={accidental} scale={scale} />
      ) : null}
    </div>
  )
}

export default Sidebar
