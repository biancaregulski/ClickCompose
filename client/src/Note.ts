export enum NaturalNote {
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

export enum Step {
  Half = 1,
  Whole = 2
}

export type GenericNote = NaturalNote | Flat | Sharp

export class Note {
  natural: NaturalNote
  sharp: Sharp
  flat: Flat

  constructor (natural: NaturalNote, sharp: Sharp, flat: Flat) {
    this.natural = natural
    this.sharp = sharp
    this.flat = flat
  }
}
