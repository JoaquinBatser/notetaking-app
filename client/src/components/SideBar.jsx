import React from 'react'
import AddNote from '../components/AddNote'
import About from './About'

const SideBar = ({ setNotes }) => {
  return (
    <aside className='col-span-2 font-bold  p-4 flex flex-col border-r border-neutral-900'>
      <AddNote setNotes={setNotes} />
      <hr className='my-4 border-neutral-900' />
      <About />
    </aside>
  )
}

export default SideBar
