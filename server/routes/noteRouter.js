import { Router } from 'express'
import NoteService from '../services/noteservice.js'
import cors from 'cors'

const noteService = new NoteService()
const noteRouter = Router()

noteRouter.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173',
  })
)

noteRouter.get('/', async (req, res) => {
  try {
    const notes = await noteService.getNotes()
    res.send(notes)
  } catch (error) {
    console.log(error)
  }
})

noteRouter.post('/', async (req, res) => {
  try {
    console.log('POST')
    const { title, text } = req.body
    console.log(text)
    const newNote = await noteService.newNote({ title, text })
    res.status(201).json(newNote)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

noteRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await noteService.deleteNote(id)
    res.sendStatus(204)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

noteRouter.put('/title/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { newTitle } = req.body
    await noteService.editNoteTitle({ id, newTitle })
    res.sendStatus(204)
  } catch (error) {
    console.log(error)
  }
})
noteRouter.put('/text/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { newText } = req.body
    await noteService.editNoteText({ id, newText })
    res.sendStatus(204)
  } catch (error) {
    console.log(error)
  }
})
export default noteRouter
