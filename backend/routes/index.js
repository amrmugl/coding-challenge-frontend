const express = require('express')
const router = express.Router()

const {
  getCombinedData,
  getSingleAgent,
  getCallsData,
} = require('../controllers')

router.get('/', getCombinedData)
router.get('/agent/:id', getSingleAgent)
router.get('/call/:number', getCallsData)

module.exports = router
