import React from 'react'
import axios from 'axios'

const DeleteNote = ({ note, setNotes, setDeleting }) => {
  const deleteNote = async () => {
    console.log(note)
    await axios.delete(`/${note._id}`, note)
    const res = await axios.get('/')
    setNotes(res.data)
    setDeleting(false)
  }
  return (
    <div className='flex justify-between'>
      <button
        className='bg-neutral-800 py-1 px-4 rounded hover:bg-neutral-700 transition-all'
        onClick={() => {
          setDeleting(false)
        }}
      >
        Cancel
      </button>
      <button
        className='bg-neutral-800 py-1 px-4 rounded hover:bg-neutral-700 transition-all'
        onClick={deleteNote}
      >
        Delete
      </button>
    </div>
  )
}

export default DeleteNote
