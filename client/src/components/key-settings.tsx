import { FormEvent, FormEventHandler, useState } from 'react'
import Dropdown, { DropdownOption } from './dropdown'
import ChordsForKey, { Note, Accidental, Scale } from './chords-for-key'

const keyOptions = [
  { value: Note.A, key: Note.A },
  { value: Note.B, key: Note.B },
  { value: Note.C, key: Note.C },
  { value: Note.D, key: Note.D },
  { value: Note.E, key: Note.E },
  { value: Note.F, key: Note.F },
  { value: Note.G, key: Note.G }
]

const accidentalOptions = [
  { value: Accidental.natural, key: '♮' },
  { value: Accidental.flat, key: '♭' },
  { value: Accidental.sharp, key: '♯' }
]

const scaleOptions = [
  { value: Scale.major, key: 'maj' },
  { value: Scale.minor, key: 'min' }
]
const standardProgressions = ['I - V - VI - IV']

interface DropdownProps {
  options: DropdownOption[]
}

interface KeySettingsProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

const KeySettings = ({ handleSubmit }: KeySettingsProps) => {
  const [selectedItem, setselectedItem] = useState<DropdownOption>()

  return (
    <div id='key-settings'>
      <form onSubmit={handleSubmit}>
        <label>Key:</label>
        <div className='key-input'>
          <Dropdown label={'baseKey'} options={keyOptions} />
          <Dropdown label={'accidental'} options={accidentalOptions} />
          <Dropdown label={'scale'} options={scaleOptions} />
        </div>
        <button type='submit'>Update</button>
      </form>
    </div>
  )
}

export default KeySettings
