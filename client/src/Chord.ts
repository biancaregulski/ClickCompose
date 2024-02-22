import { GenericNote } from './Note'

export enum ChordType {
  major = 'maj',
  minor = 'min',
  diminished = 'dim'
}

export class Chord {
  rootNote: GenericNote
  type: ChordType

  constructor (rootNote: GenericNote, type: ChordType) {
    this.rootNote = rootNote
    this.type = type
  }

  getChordName () {
    return this.rootNote + this.type
  }
}
