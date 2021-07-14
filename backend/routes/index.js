const express = require('express')
const router = express.Router()

// importing controllers from controllers/index.js file.
const {
  getCombinedData,
} = require('../controllers')

router.get('/', getCombinedData)

module.exports = router