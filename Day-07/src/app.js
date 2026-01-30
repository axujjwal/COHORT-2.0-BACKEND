const express = require('express')
const noteModel = require('./models/notes.model')

const app = express()

app.use(express.json())

/**
 * - Post /notes
 *   - Create a note in the database
 */

app.post('/notes', async (req, res) => {
    const { title, description, age } = req.body;

    const note = await noteModel.create({
        title, description, age
    })

    res.status(201).json({
        message: "Note created successfully",
        note
    })
})

/**
 * - Get /notes
 *  - Get all notes from the database
 */

app.get('/notes', async (req,res) => {
    const notes = await noteModel.find()

    res.status(200).json({
        message: "Notes fetched successfully",
        notes
    })
})


module.exports = app 