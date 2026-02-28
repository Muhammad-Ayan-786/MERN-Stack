// app.js to create the server
const express = require('express');

const app = express();
app.use(express.json());

let notes = [];

// Create a note
app.post('/createNote', (req, res) => {
  notes.push(req.body);

  res.status(201).json({
    message: "Note created successfully"
  })
})

// Get all notes
app.get('/getNotes', (req, res) => {
  res.status(200).json({
    message: "notes fetched successfully",
    notes: notes
  })
})

// Delete a note
app.delete('/deleteNote/:index', (req, res) => {
  const index = req.params.index

  // delete notes[index - 1] // deletes, & put null
  notes.splice(index, 1)

  res.status(200).json({
    message: "note deleted successfully",
  })
})

// Update a note
app.patch('/updateNote/:id', (req, res) => {
  const id = req.params.id
  const { title, description } = req.body

  if (title != undefined) {
    notes[Number(id) - 1].title = title
  }

  if (description != undefined) {
    notes[Number(id) - 1].description = description
  }

  res.status(200).json({
    message: "note updated successfully"
  })
})

module.exports = app;