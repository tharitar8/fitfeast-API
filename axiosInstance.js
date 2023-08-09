const axios = require('axios')

const axiosInstance = axios.create({
	baseURL: 'https://api.edamam.com',
	timeout: 5000, // Optional: set a request timeout
})

module.exports = axiosInstance
