// import express
const express = require('express')

const app = express()

// démarrer le serveur
const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
