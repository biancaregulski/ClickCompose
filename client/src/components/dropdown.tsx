import React, { useEffect, useState } from 'react'
import Select from 'react-dropdown-select'

export interface DropdownOption {
  value: string
  key: string
}

interface DropdownProps {
  label: string
  options: DropdownOption[]
}

const Dropdown = ({ options, label }: DropdownProps) => {
  const [selectedItem, setSelectedItem] = useState<DropdownOption>()

  useEffect(() => {
    // set first option as default
    if (options.length > 0 && selectedItem === undefined) {
      setSelectedItem(options[0])
    }
  }, [])

  return (
    <select className='key-selection' name={label}>
      {options.map(({ value, key }) => (
        <option key={key} value={value}>
          {value}
        </option>
      ))}
    </select>
  )
}

export default Dropdown
