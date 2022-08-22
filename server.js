const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./app/models')
const app = express()
let corsOptions = {
    origin: 'http://localhost:8081'
}

db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and re-sync db')
})

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the application' })
})

const PORT = process.env.port || 8080

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})