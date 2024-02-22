import { Flat, GenericNote, NaturalNote, Note, Sharp, Step } from './Note'
import { Scale } from './Note'

const standardNoteOrder: Array<GenericNote> = [
  NaturalNote.C,
  Flat.Dflat,
  NaturalNote.D,
  Flat.Eflat,
  NaturalNote.E,
  NaturalNote.F,
  Sharp.Fsharp,
  NaturalNote.G,
  Flat.Aflat,
  NaturalNote.A,
  Flat.Bflat,
  NaturalNote.B
]

export const sharpeningOrder = [
  Sharp.Fsharp,
  Sharp.Csharp,
  Sharp.Gsharp,
  Sharp.Dsharp,
  Sharp.Asharp,
  Sharp.Asharp,
  Sharp.Bsharp
]
export const flatteningOrder = [
  Flat.Bflat,
  Flat.Eflat,
  Flat.Aflat,
  Flat.Dflat,
  Flat.Gflat,
  Flat.Cflat,
  Flat.Fflat
]

// score based on a negative number for each flat, positive number for each sharp
// e.g. 3 has 3 sharps, -3 has 3 flats, 0 has no sharps or flats
export const accidentalsInKey = {
  [Flat.Gflat]: -6,
  [Flat.Dflat]: -5,
  [Sharp.Csharp]: -5,
  [Flat.Aflat]: -4,
  [Sharp.Gsharp]: -4,
  [Sharp.Dsharp]: -3,
  [Flat.Eflat]: -3,
  [Sharp.Asharp]: -2,
  [Flat.Bflat]: -2,
  [Sharp.Esharp]: -1,
  [NaturalNote.F]: -1,
  [Sharp.Bsharp]: 0,
  [NaturalNote.C]: 0,
  [NaturalNote.G]: 1,
  [NaturalNote.D]: 2,
  [NaturalNote.A]: 3,
  [NaturalNote.E]: 4,
  [Flat.Fflat]: 4,
  [NaturalNote.B]: 5,
  [Flat.Cflat]: 5,
  [Sharp.Fsharp]: 6
}

const majorNoteOrder = [0, 2, 4, 5, 7, 9, 11, 12]
const minorNoteOrder = [0, 2, 3, 5, 7, 8, 10, 12]

const noteOrderForScale = {
  [Scale.major]: majorNoteOrder,
  [Scale.minor]: minorNoteOrder
}

export function getOrderedNotesforKey (
  genericNote: GenericNote,
  scale: Scale = Scale.major
): GenericNote[] {
  const startIndex = standardNoteOrder.findIndex(note => note == genericNote)

  if (startIndex < 0) {
    console.log('Invalid starting note: ' + genericNote)
    return []
  }

  let notesBasedOnStartIndex: Array<GenericNote> = standardNoteOrder
    .slice(startIndex)
    .concat(standardNoteOrder.slice(0, startIndex))

  return noteOrderForScale[scale].map(index => {
    return notesBasedOnStartIndex[index]
  })
}
