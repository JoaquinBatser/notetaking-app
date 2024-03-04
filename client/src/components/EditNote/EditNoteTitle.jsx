import React, { useState } from 'react'
import axios from 'axios'
import { IconCheck, IconX } from '@tabler/icons-react'

const EditNoteTitle = ({ note, setNotes, setEditingTitle }) => {
  const [title, setTitle] = useState('')
  const handleSubmit = async e => {
    e.preventDefault()
    if (!title.trim().length) return

    const editedNoteTitle = {
      newTitle: title,
    }

    await axios.put(`/title/${note._id}`, editedNoteTitle)

    setTitle('')
    const res = await axios.get('/')
    setNotes(res.data)
    setEditingTitle(false)
  }
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className='mb-2 px-4 py-2 w-full border placeholder-neutral-600 text-sm border-neutral-900 bg-black'
        autoFocus
        onChange={e => setTitle(e.target.value)}
        placeholder='Edit Title'
      />

      <div className='flex justify-between'>
        <button
          className='hover:text-red-500'
          onClick={() => setEditingTitle(false)}
        >
          <IconX size={20} />
        </button>
        <button
          className='hover:text-green-500'
          type='submit'
        >
          <IconCheck size={20} />
        </button>
      </div>
    </form>
  )
}

export default EditNoteTitle
