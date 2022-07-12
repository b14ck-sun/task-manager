console.log('Task Manager App')
const express = require("express")
const req = require("express/lib/request")
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config() 

const app = express()
const port = 5000

app.use(express.json())

// app.get("/", (req, res) => {
//     res.send('Hell')

// })

app.use('/api/v1/tasks', tasks)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () =>{ console.log(`Listening on port ${port}...`) })
    } catch (error) {
        console.log(error);
    }
}

start()