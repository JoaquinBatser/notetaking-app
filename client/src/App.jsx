import './App.css'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import AddNote from './components/AddNote'
import Note from './components/Note'
import NoteList from './components/NoteList'

axios.defaults.baseURL = 'http://localhost:5000'
axios.defaults.withCredentials = true

function App() {
  const [notes, setNotes] = useState([])

  const { isPending, error, data } = useQuery({
    queryKey: ['notes'],
    queryFn: async () => {
      const res = await axios.get('/')

      setNotes(res.data)
      return res.data
    },
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className='gap-2 h-dvh grid grid-cols-12'>
      <aside className='col-span-2 font-bold  p-4 flex flex-col border-r border-neutral-900'>
        <AddNote setNotes={setNotes} />
        <hr className='my-4 border-neutral-900' />
        <p>Home</p>
      </aside>

      <main className='col-span-10 h-full'>
        <NoteList
          notes={notes}
          setNotes={setNotes}
        />
      </main>
    </div>
  )
}

export default App
