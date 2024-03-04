import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

const NoteList = ({ notes, setNotes }) => {
  return (
    <section className='p-4 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] grid-rows-[repeat(auto-fill,minmax(200px,1fr))] '>
      {notes.map(note => (
        <Note
          key={note._id}
          note={note}
          setNotes={setNotes}
        />
      ))}
    </section>
  )
}

export default NoteList
