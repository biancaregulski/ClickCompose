import { FormEvent, useState } from 'react'
import Dropdown, { DropdownOption } from './dropdown'
import { Accidental, Flat, NaturalNote, Scale, Sharp } from '../Note'

const FLAT_SYMBOL = '♭'
const SHARP_SYMBOL = '♯'

const keyOptions = [
  { key: NaturalNote.C, value: NaturalNote.C },
  { key: Flat.Dflat, value: NaturalNote.D + FLAT_SYMBOL },
  { key: NaturalNote.D, value: NaturalNote.D },
  { key: Flat.Eflat, value: NaturalNote.E + FLAT_SYMBOL },
  { key: NaturalNote.E, value: NaturalNote.E },
  { key: NaturalNote.F, value: NaturalNote.F },
  { key: Sharp.Fsharp, value: NaturalNote.F + SHARP_SYMBOL },
  { key: NaturalNote.G, value: NaturalNote.G },
  { key: Flat.Aflat, value: NaturalNote.A + FLAT_SYMBOL },
  { key: NaturalNote.A, value: NaturalNote.A },
  { key: Flat.Bflat, value: NaturalNote.B + FLAT_SYMBOL },
  { key: NaturalNote.B, value: NaturalNote.B }
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
          {/* <Dropdown label={'accidental'} options={accidentalOptions} /> */}
          <Dropdown label={'scale'} options={scaleOptions} />
        </div>
        <button type='submit'>Update</button>
      </form>
    </div>
  )
}

export default KeySettings
