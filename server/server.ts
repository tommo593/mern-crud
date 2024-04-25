//Import dependencies

const express = require('express')

//Create an Express

const app = express()

// Routing

app.get('/', (req, res) => {
    res.json({hello: "world"})
})

// Server

app.listen(5174);