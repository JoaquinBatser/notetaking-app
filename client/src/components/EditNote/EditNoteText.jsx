import React, { useState } from 'react'
import axios from 'axios'
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
        autoFocus
        onChange={e => setText(e.target.value)}
        placeholder='Edit Title'
      />

      <button onClick={() => setEditingText(false)}>Cancel</button>
      <button type='submit'>Edit</button>
    </form>
  )
}

export default EditNoteText
