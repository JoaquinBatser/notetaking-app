import React, { useState } from 'react'
import axios from 'axios'

const AddNote = ({ setNotes }) => {
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')
  const [adding, setAdding] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    if (!text.trim().length) return

    const note = {
      title: title,
      text: text,
    }

    await axios.post('/', note)
    setText('')
    setTitle('')
    const res = await axios.get('/')
    setNotes(res.data)
    setAdding(false)
  }
  return (
    <>
      {adding ? (
        <form onSubmit={handleSubmit}>
          <textarea
            autoFocus
            onChange={e => setTitle(e.target.value)}
            placeholder='Add Title'
          />
          <textarea
            autoFocus
            onChange={e => setText(e.target.value)}
            placeholder='Add Note'
          />
          <div>
            <button onClick={() => setAdding(false)}>Cancel</button>
            <button type='submit'>Add</button>
          </div>
        </form>
      ) : (
        <button
          className='bg-neutral-800'
          onClick={() => setAdding(true)}
        >
          Add Note
        </button>
      )}
    </>
  )
}

export default AddNote
