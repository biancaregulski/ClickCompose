import KeySettings from './key-settings'

interface SidebarProps {}

const cChords = ['C', 'Dm', 'E']

const displayChords = (chords: Array<string>) => {
  return (
    <>
      {chords.map(function (chord: string, i) {
        return <button key={i}>{chord}</button>
      })}
    </>
  )
}

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <KeySettings />
      {displayChords(cChords)}
    </div>
  )
}

export default Sidebar
