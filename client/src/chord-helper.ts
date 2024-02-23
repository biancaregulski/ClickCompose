import { Chord, ChordType } from './Chord'
import { GenericNote } from './Note'
import { Scale } from './Note'
import { getOrderedNotesforKey } from './note-helper'

export interface ChordProgression {
  romanNumerals: Array<RomanNumeral>
  chords: Array<Chord>
}

export type ChordProgressionOrder = Array<number>
export type RomanNumeral = string

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

export const majorChordProgressionsOrder: Array<ChordProgressionOrder> = [
  [1, 5, 6, 4],
  [6, 4, 1, 5],
  [1, 4, 5, 4],
  [1, 6, 4, 5],
  [2, 5, 1, 6]
]

export const romanNumerals: Array<RomanNumeral> = [
  '', // placeholder for 0
  'I',
  'II',
  'III',
  'IV',
  'V',
  'VI',
  'VII',
  'VIII',
  'IX',
  'X',
  'XI',
  'XII',
  'XIII',
  'XIV',
  'XV',
  'XVI',
  'XVII',
  'XVIII',
  'XIX',
  'XX'
]

const chordOrderForScale = {
  [Scale.major]: majorChordOrder,
  [Scale.minor]: minorChordOrder
}

function getRomanNumeralForChord (chordNumber: number) {
  if (chordNumber < 1 || chordNumber > romanNumerals.length) {
    return 'Invalid input. Please enter a number between 1 and 20.'
  }

  return romanNumerals[chordNumber]
}

export function getProgressionInRomanNumerals (
  chordOrder: ChordProgressionOrder
) {
  return chordOrder.map(chordNumber => {
    return getRomanNumeralForChord(chordNumber)
  })
}

// function getChordsForChordProgression()

export function getSuggestedProgressions (
  chords: Array<Chord>,
  scale: Scale
): Array<ChordProgression> {
  return majorChordProgressionsOrder.map(chordOrder => {
    return {
      romanNumerals: getProgressionInRomanNumerals(chordOrder),
      chords: chordOrder.map((chordIndex: number) => {
        return chords[chordIndex - 1]
      })
    }
  })
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
  return chordOrderForScale[scale].map((chordType, index) => {
    return new Chord(orderedNotes[index], chordType)
  })
}
