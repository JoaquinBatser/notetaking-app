import React, { useState } from 'react'
import axios from 'axios'

import DeleteNote from './DeleteNote'
import EditNoteText from './EditNote/EditNoteText'
import EditNoteTitle from './EditNote/EditNoteTitle'
import { IconEdit, IconTrashXFilled, IconArrowBack } from '@tabler/icons-react'

const Note = ({ note, setNotes }) => {
  const [deleting, setDeleting] = useState(false)
  const [editingText, setEditingText] = useState(false)
  const [editingTitle, setEditingTitle] = useState(false)

  return (
    <div
      key={note._id}
      className='border p-4 border-neutral-900 relative hover:border-neutral-500 hover:cursor-pointer transition-all '
    >
      {!editingTitle ? (
        <div className='flex justify-between items-start'>
          <h2 className='font-bold text-lg break-all mr-4'>{note.title}</h2>

          <button
            className='hover:text-yellow-500 text-neutral-900'
            onClick={() => {
              setEditingTitle(true)
            }}
          >
            <IconEdit size={20} />
          </button>
        </div>
      ) : (
        <EditNoteTitle
          note={note}
          setNotes={setNotes}
          setEditingTitle={setEditingTitle}
        />
      )}
      <hr className='my-4 border-neutral-900' />
      {!editingText ? (
        <div className='flex justify-between items-start h-full'>
          <p className='text-sm h-full break-all mr-4 '>{note.text}</p>
          <button
            className='hover:text-yellow-500 text-neutral-900'
            onClick={() => {
              setEditingText(true)
            }}
          >
            <IconEdit size={20} />
          </button>
        </div>
      ) : (
        <EditNoteText
          note={note}
          setNotes={setNotes}
          setEditingText={setEditingText}
        />
      )}

      <div className=' flex justify-between mt-12'>
        {!deleting ? (
          <button
            className='hover:text-red-500 absolute bottom-0 right-0 mr-4 mb-4 '
            onClick={() => {
              setDeleting(true)
            }}
          >
            <IconTrashXFilled size={20} />
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
