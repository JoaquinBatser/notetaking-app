import mongoose from 'mongoose'
import { noteModel } from '../models/note.model.js'

export default class NoteService {
  async getNotes() {
    try {
      const notes = await noteModel.find()
      return notes
    } catch (error) {
      console.log(error)
    }
  }
  async newNote({ title, text }) {
    try {
      const newNote = await noteModel.create({
        title: title ? title : '-',
        text: text,
      })
      return newNote
    } catch (error) {
      console.log(error)
    }
  }

  async deleteNote(id) {
    try {
      await noteModel.findByIdAndDelete(id)
    } catch (error) {
      console.log(error)
    }
  }

  async editNoteTitle({ id, newTitle }) {
    try {
      await noteModel.findByIdAndUpdate(id, { title: newTitle })
    } catch (error) {
      console.log(error)
    }
  }
  async editNoteText({ id, newText }) {
    try {
      console.log('service', id, newText)
      await noteModel.findByIdAndUpdate(id, { text: newText })
    } catch (error) {
      console.log(error)
    }
  }
}
