import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

const NoteList = ({ notes, setNotes }) => {
  return (
    <section className=' p-4 h-full bg-black grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))] grid-rows-[repeat(auto-fill,minmax(170px,1fr))] gap-4'>
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
