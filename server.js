const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./app/models')
const app = express()

let corsOptions = {
    origin: 'http://localhost:8081'
}

db.sequelize.sync({ force: true })
    .then(() => {
        console.log('Synced db')
})
    .catch((err) => {
        console.log('Failed to sync db: ' + err.message)
    })

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the application' })
})

require('./app/routes/tutorial.routes')(app);

const PORT = process.env.port || 8080

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})