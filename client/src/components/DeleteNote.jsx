import React from 'react'
import axios from 'axios'
import { IconArrowBack, IconTrashXFilled } from '@tabler/icons-react'

const DeleteNote = ({ note, setNotes, setDeleting }) => {
  const deleteNote = async () => {
    console.log(note)
    await axios.delete(`/${note._id}`, note)
    const res = await axios.get('/')
    setNotes(res.data)
    setDeleting(false)
  }
  return (
    <div className='flex justify-between absolute bottom-0 right-0 mr-4 mb-4'>
      <button
        className='hover:text-blue-500'
        onClick={() => {
          setDeleting(false)
        }}
      >
        <IconArrowBack />
      </button>
      <button
        className='hover:text-red-500'
        onClick={deleteNote}
      >
        <IconTrashXFilled />
      </button>
    </div>
  )
}

export default DeleteNote
