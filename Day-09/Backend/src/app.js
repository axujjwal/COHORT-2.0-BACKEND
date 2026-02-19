// server ko create karna


const express = require('express')
const noteModel = require('./models/note.model')
const cors = require('cors')


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static("./public"))



/**
 * - post /api/notes 
 * - create new note and save data in mongodb
 */
app.post('/api/notes', async (req, res) => {
    const { title, description } = req.body

    const note = await noteModel.create({
        title, description
    })

    res.status(201).json({
        message: "Note created successfully",
        note
    })
})

/**
 * - get /api/notes
 * - fetch all the notes from database
 */
app.get('/api/notes', async (req, res) => {
    const notes = await noteModel.find()

    res.status(201).json({
        message: "Notes fetch successfully.",
        notes
    })
})


/**
 * - delete /api/notes/:id
 * - delete note with the id from req.params  
*/
app.delete('/api/notes/:id', async (req, res) => {
    const id = req.params.id

    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message: "Note deleted succesfully"
    })
})

/**
 * - patch /api/notes/:id
 * - update the description of the note by id 
 * - req.body= {description}
 */
app.patch('/api/notes/:id', async (req, res) => {
    const id = req.params.id
    const { description } = req.body;

    await noteModel.findByIdAndUpdate(id, { description });

    res.status(200).json({
        message: "Note updated successfully.",
    });
});


app.use("*name", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../public", "index.html")
  );
});

module.exports = app