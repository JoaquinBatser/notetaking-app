import './App.css'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import Note from './components/Note'
import NoteList from './components/NoteList'
import SideBar from './components/SideBar'

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
    <div className='gap-2 h-dvh grid grid-cols-12 overflow-hidden'>
      <SideBar setNotes={setNotes} />

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
