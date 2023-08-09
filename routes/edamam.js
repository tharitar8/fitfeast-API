const express = require('express')
const router = express.Router()
const axios = require('../axiosInstance') 


const EDAMAM_APP_ID = process.env.EDAMAM_APP_ID
const EDAMAM_API_KEY = process.env.EDAMAM_API_KEY
console.log(EDAMAM_APP_ID, EDAMAM_API_KEY)

router.get('/search', async (req, res) => {
	const { q, calories, from, to } = req.query
	 console.log(
			`Received parameters: q=${q}, calories=${calories}, from=${from}, to=${to}`
		) 
	try {
		const response = await axios.get('/search', {
			params: {
				q,
				calories,
				from,
				to,
				app_id: EDAMAM_APP_ID,
				app_key: EDAMAM_API_KEY,
			},
		})
		res.json(response.data)
	} catch (error) {
		console.error(
			'Error:',
			error.response ? error.response.data : error.message
		)
		res
			.status(500)
			.json({
				message: 'Server Error',
				errorMessage: error.response ? error.response.data : error.message,
			})
	}
})

module.exports = router
