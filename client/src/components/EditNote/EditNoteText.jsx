import React, { useState } from 'react'
import axios from 'axios'
import { IconCheck, IconX } from '@tabler/icons-react'
const EditNoteText = ({ note, setNotes, setEditingText }) => {
  const [text, setText] = useState('')
  const handleSubmit = async e => {
    e.preventDefault()
    if (!text.trim().length) return

    const editedNoteText = {
      newText: text,
    }
    console.log(editedNoteText)
    await axios.put(`/text/${note._id}`, editedNoteText)
    console.log('here')

    setText('')
    const res = await axios.get('/')
    setNotes(res.data)
    setEditingText(false)
  }
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className='mb-2 px-4 py-2 w-full border placeholder-neutral-600 text-sm border-neutral-900 bg-black'
        autoFocus
        onChange={e => setText(e.target.value)}
        placeholder='Edit Text'
      />

      <div className='flex justify-between'>
        <button
          className='hover:text-red-500'
          onClick={() => setEditingText(false)}
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

export default EditNoteText
