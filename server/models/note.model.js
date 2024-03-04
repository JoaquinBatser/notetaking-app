import mongoose, { mongo } from 'mongoose'

const noteCollection = 'notes'

const noteSchema = new mongoose.Schema({
  title: String,
  text: String,
  category: String,
})

export const noteModel = mongoose.model(noteCollection, noteSchema)
