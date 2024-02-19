import React, { useEffect, useState } from 'react'
import Select from 'react-dropdown-select'

export interface DropdownOption {
  value: string
  label: string
}

interface DropdownProps {
  options: DropdownOption[]
  onChange: (selectedItems: DropdownOption[]) => void
}

const Dropdown = ({ options, onChange }: DropdownProps) => {
  const [selectedItems, setSelectedItems] = useState<DropdownOption[]>([])

  useEffect(() => {
    // set first option as default
    if (options.length > 0 && selectedItems.length === 0) {
      setSelectedItems([options[0]])
      onChange([options[0]])
    }
  }, [])

  const handleDropdownChange = (
    selected: { value: string; label: string }[]
  ) => {
    setSelectedItems(selected)
    onChange(selected)
  }

  return (
    <Select
      options={options}
      values={selectedItems}
      onChange={values => handleDropdownChange(values)}
      className='key-selection'
    />
  )
}

export default Dropdown
