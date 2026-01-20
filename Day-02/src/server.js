const express = require("express")

const app = express()

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get("/about", (req, res) => {
    res.send("This is about page")
})

app.get("/home", (req, res) => {
    res.send("Hello this is the Home page")
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});