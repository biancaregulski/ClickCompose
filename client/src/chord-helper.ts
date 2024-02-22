import { Chord, ChordType } from './Chord'
import { GenericNote } from './Note'
import { Scale } from './Note'
import { getOrderedNotesforKey } from './note-helper'

export const majorChordOrder: ChordType[] = [
  ChordType.major,
  ChordType.minor,
  ChordType.minor,
  ChordType.major,
  ChordType.major,
  ChordType.minor,
  ChordType.diminished
]

export const minorChordOrder: ChordType[] = [
  ChordType.minor,
  ChordType.diminished,
  ChordType.major,
  ChordType.minor,
  ChordType.minor,
  ChordType.major,
  ChordType.major
]

const chordOrderForScale = {
  [Scale.major]: majorChordOrder,
  [Scale.minor]: minorChordOrder
}

export function getAvaliableChords (
  genericNote: GenericNote,
  scale: Scale
): Chord[] {
  const orderedNotes = getOrderedNotesforKey(genericNote, scale)

  if (orderedNotes.length < chordOrderForScale[scale].length) {
    console.log('Cannot process notes for chord')
    return []
  }
  console.log(orderedNotes)
  return chordOrderForScale[scale].map((chordType, index) => {
    return new Chord(orderedNotes[index], chordType)
  })
}
