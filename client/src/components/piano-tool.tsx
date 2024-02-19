// https://codesandbox.io/p/sandbox/l4jjvzmp47?file=%2Fsrc%2Findex.js%3A113%2C35-113%2C43
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano'
import 'react-piano/dist/styles.css'

const PianoTool = () => {
  const firstNote = MidiNumbers.fromNote('c3')
  const lastNote = MidiNumbers.fromNote('f5')

  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW
  })

  return (
    <Piano
      noteRange={{
        first: firstNote,
        last: lastNote
      }}
      playNote={(midiNumber: any) => {
        // play a given note
      }}
      stopNote={(midiNumber: any) => {
        // play a given note
      }}
      width={1000}
      keyboardShortcuts={keyboardShortcuts}
    />
  )
}

export default PianoTool
