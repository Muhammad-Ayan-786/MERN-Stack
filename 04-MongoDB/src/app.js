const express = require('express');
const noteModel = require('./models/note.model')

const app = express()
app.use(express.json())

// Create a Note
app.post('/createNote', async (req, res) => {
  const data = req.body

  await noteModel.create({
    title: data.title,
    description: data.description
  })

  res.status(201).json({
    message: "Note Created Successfully"
  })
})

// Get all Notes [ find() => [{}, {}] or [] ]
app.get('/getNotes', async (req, res) => {
  const notes = await noteModel.find();

  res.status(200).json({
    message: "Notes Fetched Successfully",
    notes: notes
  })
})

// Find Specific Note [ findOne() => {} or null ]
app.get('/findNote', async (req, res) => {
  const notes = await noteModel.findOne({
    title: "title_2"
  });

  res.status(200).json({
    message: "Notes Fetched Successfully",
    notes: notes
  })
})

// Delete a Note
app.delete('/deleteNote/:id', async (req, res) => {
  const id = req.params.id

  await noteModel.findOneAndDelete({
    _id: id
  })

  res.status(200).json({
    message: "Notes Deleted Successfully",
  })
})

// Update a Note
app.patch('/updateNote/:id', async (req, res) => {
  const id = req.params.id
  const description = req.body.description

  await noteModel.findOneAndUpdate(
    { _id: id },
    { description: description }
  )

  res.status(200).json({
    message: "Notes Deleted Successfully",
  })
})

module.exports = app