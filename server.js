const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
let corsOptions = {
    origin: 'http://localhost:8081'
}

