export enum Note {
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  G = 'G',
  A = 'A',
  B = 'B'
}

export enum Sharp {
  Asharp = 'A#',
  Bsharp = 'B#',
  Csharp = 'C#',
  Dsharp = 'D#',
  Esharp = 'E#',
  Fsharp = 'F#',
  Gsharp = 'G#'
}

export enum Flat {
  Aflat = 'A♭',
  Bflat = 'B♭',
  Cflat = 'C♭',
  Dflat = 'D♭',
  Eflat = 'E♭',
  Fflat = 'F♭',
  Gflat = 'G♭'
}

export enum Accidental {
  natural = 'Natural',
  sharp = 'Sharp',
  flat = 'Flat'
}

export enum Scale {
  major = 'Major',
  minor = 'Minor'
}

const orderedNotes = [Note.C, Note.D, Note.E, Note.F, Note.G, Note.A, Note.B]

const naturalToSharp = {
  [Note.A]: Sharp.Asharp,
  [Note.B]: Sharp.Bsharp,
  [Note.C]: Sharp.Csharp,
  [Note.D]: Sharp.Dsharp,
  [Note.E]: Sharp.Esharp,
  [Note.F]: Sharp.Fsharp,
  [Note.G]: Sharp.Gsharp
}

const naturalToFlat = {
  [Note.A]: Flat.Aflat,
  [Note.B]: Flat.Bflat,
  [Note.C]: Flat.Cflat,
  [Note.D]: Flat.Dflat,
  [Note.E]: Flat.Eflat,
  [Note.F]: Flat.Fflat,
  [Note.G]: Flat.Gflat
}

const sharpeningOrder = [Note.F, Note.C, Note.G, Note.D, Note.A, Note.E, Note.B]
const flatteningOrder = [Note.B, Note.E, Note.A, Note.D, Note.G, Note.C, Note.F]

// score based on a negative number for each flat, positive number for each sharp
// e.g. 3 has 3 sharps, -3 has 3 flats, 0 has no sharps or flats
const accidentalsInKey = {
  [Flat.Gflat]: -6,
  [Flat.Dflat]: -5,
  [Flat.Aflat]: -4,
  [Flat.Eflat]: -3,
  [Flat.Bflat]: -2,
  [Note.F]: -1,
  [Note.C]: 0,
  [Note.G]: 1,
  [Note.D]: 2,
  [Note.A]: 3,
  [Note.E]: 4,
  [Note.B]: 5,
  [Sharp.Fsharp]: 6
}

interface ChordsForKeyProps {
  baseKey: Note
  accidental?: Accidental
  scale?: Scale
}

const ChordsForKey = ({ baseKey }: ChordsForKeyProps) => {
  function getOrderedNoteforKey (
    startingNote: Note,
    accidental: Accidental = Accidental.natural,
    scale: Scale = Scale.major
  ) {
    const startIndex = orderedNotes.indexOf(startingNote)

    if (startIndex < 0) {
      console.error('Invalid starting note')
      return []
    }

    let notesInKey: Array<Note> = orderedNotes
      .slice(startIndex)
      .concat(orderedNotes.slice(0, startIndex))

    if (startingNote in accidentalsInKey) {
      // create an object for the notes that we need to sharpen for the key
      const notesToSharpen = new Set(
        sharpeningOrder.slice(0, accidentalsInKey[startingNote])
      )

      return notesInKey.map(noteInKey =>
        notesToSharpen.has(noteInKey) && noteInKey in naturalToSharp
          ? naturalToSharp[noteInKey]
          : noteInKey
      )
    }
  }

  const availableChords = getOrderedNoteforKey(baseKey)

  return (
    <div className='chord-group'>
      {availableChords
        ? availableChords.map(function (chord: string, i) {
            return <button key={i}>{chord}</button>
          })
        : null}
    </div>
  )
}

export default ChordsForKey
