import { Chord } from '../Chord'
import { Flat, GenericNote, NaturalNote, Note, Scale, Sharp } from '../Note'
import { getAvaliableChords } from '../chord-helper'
import { getOrderedNotesforKey } from '../note-helper'

interface ChordsForKeyProps {
  addChordToWorkspace: (newChord: Chord) => void
  genericNote: GenericNote
  scale?: Scale
}

const ChordsForKey = ({
  addChordToWorkspace,
  genericNote,
  scale = Scale.major
}: ChordsForKeyProps) => {
  const availableChords = getAvaliableChords(genericNote, scale)

  return (
    <div className='chord-group'>
      {availableChords
        ? availableChords.map(function (chord: Chord, i) {
            return (
              <button onClick={() => addChordToWorkspace(chord)} key={i}>
                {chord.getChordName()}
              </button>
            )
          })
        : null}
    </div>
  )
}

export default ChordsForKey
