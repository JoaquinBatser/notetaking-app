import React, { useState } from 'react'
import axios from 'axios'

import DeleteNote from './DeleteNote'
import EditNoteText from './EditNote/EditNoteText'
import EditNoteTitle from './EditNote/EditNoteTitle'

const Note = ({ note, setNotes }) => {
  const [deleting, setDeleting] = useState(false)
  const [editingText, setEditingText] = useState(false)
  const [editingTitle, setEditingTitle] = useState(false)

  return (
    <div
      key={note._id}
      className='h-fit p-4 border shadow-sm border-[#1a1a1a] bg-[#151515]  hover:border-neutral-700 transition-all rounded-lg hover:shadow-xl hover:cursor-pointer'
    >
      {!editingTitle ? (
        <div className='flex justify-between'>
          <h2 className='font-bold text-lg mb-2'>{note.title}</h2>
          <button
            onClick={() => {
              setEditingTitle(true)
            }}
          >
            +
          </button>
        </div>
      ) : (
        <EditNoteTitle
          note={note}
          setNotes={setNotes}
          setEditingTitle={setEditingTitle}
        />
      )}
      {!editingText ? (
        <div className='flex justify-between'>
          <p className='text-sm mb-2'>{note.text}</p>
          <button
            onClick={() => {
              setEditingText(true)
            }}
          >
            +
          </button>
        </div>
      ) : (
        <EditNoteText
          note={note}
          setNotes={setNotes}
          setEditingText={setEditingText}
        />
      )}

      <div className='mb-2'>
        {!deleting ? (
          <button
            className='bg-neutral-800 py-1 px-4 rounded hover:bg-neutral-700 transition-all'
            onClick={() => {
              setDeleting(true)
            }}
          >
            Delete
          </button>
        ) : (
          <DeleteNote
            note={note}
            setNotes={setNotes}
            setDeleting={setDeleting}
          />
        )}
      </div>
    </div>
  )
}

export default Note
