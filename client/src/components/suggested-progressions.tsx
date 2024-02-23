import { Chord } from '../Chord'
import { GenericNote, Scale } from '../Note'
import {
  getSuggestedProgressions,
  getProgressionInRomanNumerals,
  romanNumerals
} from '../chord-helper'

interface ChordsForKeyProps {
  chords: Array<Chord>
  scale: Scale
}

const SuggestedProgressions = ({ chords, scale }: ChordsForKeyProps) => {
  const suggestedProgressions = getSuggestedProgressions(chords, scale)
  return (
    <div>
      <p>Suggested Chord Progressions:</p>
      {suggestedProgressions
        ? suggestedProgressions.map((progression, i) => {
            return (
              <div key={i} className='chord-progression'>
                {progression.romanNumerals.map((romanNumeral, j) => {
                  return <span key={j}>{romanNumeral}</span>
                })}
                {progression.chords.map((progressionChord, k) => {
                  return <div key={k}>{progressionChord.getChordName()}</div>
                })}
              </div>
            )
          })
        : null}
    </div>
  )
}

export default SuggestedProgressions
