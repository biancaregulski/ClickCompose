import { useState } from 'react'
import Dropdown, { DropdownOption } from './dropdown'

// TODO: convert to enums
const keyOptions = [
  { value: 'A', label: 'A' },
  { value: 'B', label: 'B' },
  { value: 'C', label: 'C' },
  { value: 'D', label: 'D' },
  { value: 'E', label: 'E' },
  { value: 'F', label: 'F' },
  { value: 'G', label: 'G' }
]

const accidentalOptions = [
  { value: 'natural', label: '♮' },
  { value: 'flat', label: '♭' },
  { value: 'sharp', label: '♯' }
]

const scaleOptions = [
  { value: 'major', label: 'maj' },
  { value: 'minor', label: 'min' }
]
const standardProgressions = ['I - V - VI - IV']

interface KeyFormData {
  key: string
  accidental: string
  scale: string
  progression: string
}

interface DropdownProps {
  options: DropdownOption[]
  onChange: (selectedItems: DropdownOption[]) => void
}

const KeySettings = () => {
  const [selectedItems, setSelectedItems] = useState<
    { value: string; label: string }[]
  >([])

  //   selection: { value: string; label: string }
  const handleDropdownChange = (
    selected: { value: string; label: string }[]
  ) => {
    setSelectedItems(selected)
    console.log(selected)
  }

  const onSubmit = (option: any) => {
    console.log('submitted')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(keyOptions)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div id='key-settings'>
        <label>Key:</label>
        <div className='key-input'>
          <Dropdown options={keyOptions} onChange={handleDropdownChange} />
          <Dropdown
            options={accidentalOptions}
            onChange={handleDropdownChange}
          />
          <Dropdown options={scaleOptions} onChange={handleDropdownChange} />
        </div>
        <button type='submit'>Update</button>
      </div>
    </form>
  )
}

export default KeySettings
