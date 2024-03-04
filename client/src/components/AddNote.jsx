import React, { useState } from 'react'
import axios from 'axios'
import { IconPencilPlus } from '@tabler/icons-react'
import { IconLayoutGridAdd } from '@tabler/icons-react'
import { IconArrowBack } from '@tabler/icons-react'
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
        <div>
          <form onSubmit={handleSubmit}>
            <textarea
              className='px-4 resize-none h-10 py-2 mb-2 w-full border placeholder-neutral-600 text-sm  border-neutral-900 bg-black'
              autoFocus
              onChange={e => setTitle(e.target.value)}
              placeholder='Add Title'
            />
            <textarea
              className='mb-2 resize-none h-32 px-4 py-2 w-full border placeholder-neutral-600 text-sm border-neutral-900 bg-black'
              autoFocus
              onChange={e => setText(e.target.value)}
              placeholder='Add Note'
            />
            <div className='flex justify-between'>
              <button
                className='hover:text-blue-500'
                onClick={() => setAdding(false)}
              >
                <IconArrowBack />
              </button>
              <button
                className='hover:text-green-500'
                type='submit'
              >
                <IconLayoutGridAdd />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          className='hover:text-green-500'
          onClick={() => setAdding(true)}
        >
          <IconPencilPlus />
        </button>
      )}
    </>
  )
}

export default AddNote
