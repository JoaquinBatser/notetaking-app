import React, { useState } from 'react'
import axios from 'axios'

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
        autoFocus
        onChange={e => setTitle(e.target.value)}
        placeholder='Edit Title'
      />

      <button onClick={() => setEditingTitle(false)}>Cancel</button>
      <button type='submit'>Edit</button>
    </form>
  )
}

export default EditNoteTitle
