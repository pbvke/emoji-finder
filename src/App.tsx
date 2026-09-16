import { useState } from 'react'
import './App.css'

const emojis = [
  { emoji: '😀', name: 'Grinning Face', keywords: 'grinning, face, smile' },
  { emoji: '😂', name: 'Face with Tears of Joy', keywords: 'laugh, funny, joy' },
  { emoji: '😍', name: 'Smiling Face with Heart-Eyes', keywords: 'love, crush, heart' },
  { emoji: '🤔', name: 'Thinking Face', keywords: 'thinking, hmm, consider' },
  { emoji: '🥳', name: 'Partying Face', keywords: 'party, celebrate, birthday' },
  { emoji: '🔥', name: 'Fire', keywords: 'hot, flame, lit' },
  { emoji: '🚀', name: 'Rocket', keywords: 'space, launch, fast' },
  { emoji: '🌈', name: 'Rainbow', keywords: 'color, sky, nature' },
]

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  const normalizedQuery = searchQuery.trim().toLowerCase()
  const filteredEmojis = emojis.filter(({ name, keywords }) =>
    `${name} ${keywords}`.toLowerCase().includes(normalizedQuery),
  )

  return (
    <>
      <header>
        <h1>Emoji Finder</h1>
        <p className='desc'>Find emoji by keywords</p>
        <input
          type="search"
          placeholder="Search emojis..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          aria-label="Search emojis"
        />
      </header>

      <main>
        <div className='cards-container'>
          {filteredEmojis.length > 0 ? filteredEmojis.map(({ emoji, name, keywords }) => (
            <div className='emoji-card' key={emoji}>
              <p className='emoji'>{emoji}</p>
              <p className='emoji-name'>{name}</p>
              <p className='keywords'>{keywords}</p>
            </div>
          )) : (
            <p className='empty-state'>No emojis found</p>
          )}
        </div>
      </main>
    </>
  )
}

export default App
