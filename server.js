require('dotenv').config()

const express = require('express')
const cors = require('cors')
const edamamRoutes = require('./routes/edamam')

const app = express()

// Middleware
app.use(cors())
app.use(express.json()) // Using express built-in middleware instead of bodyParser

// Use the Edamam routes
app.use('/api/edamam', edamamRoutes)

// Generic Routes
app.get('/', (req, res) => {
	res.send('Hello from FitFeast API!')
})

// Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack)
	res.status(500).send('Something went wrong!')
})

const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`)
})
