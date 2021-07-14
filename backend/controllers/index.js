const agents = require('../../json-data/agents.json')
const logs = require('../../json-data/logs.json')
const resolutions = require('../../json-data/resolution.json')

// function to combine logs and resolutions and agents
const combinedData = logs.map((log) => ({
  ...resolutions.find((resolution) => resolution.identifier === log.identifier),
  ...agents.find((agent) => agent.identifier === log.agentIdentifier),
  ...log
}))

// function for getting combined data on get request from routes/index.js
async function getCombinedData(req, res) {
  try {
    return res.json({
      status: 'success',
      message: 'Combined data',
      data: combinedData
    })
  } catch (err) {
    return res.json({ status: 'error', message: err })
  }
}

// function for getting single agent data on get request from routes/index.js
async function getSingleAgent(req, res) {
  try {
    const { id } = req.params
    if (!id) {
      return res.json({
        status: 'error',
        message: 'Enter correct id'
      })
    }

    if (agents.find((agent) => agent.identifier === id) === undefined) {
      return res.json({
        status: 'error',
        message: 'Agent not found'
      })
    }

    return res.json({
      status: 'success',
      message: `Data for Agent - ${id}`,
      agent: agents.find((agent) => agent.identifier === id),
      logs: combinedData.filter(
        (log) => log.agentIdentifier === id
      )
    })
  } catch (err) {
    return res.json({ status: 'error', message: err })
  }
}

// function for getting calls data on get request from routes/index.js
async function getCallsData(req, res) {
  try {
    const { number } = req.params
    if (!number) {
      return res.json({
        status: 'error',
        message: 'Enter correct number'
      })
    }

    if (logs.find((log) => log.number === number) === undefined) {
      return res.json({
        status: 'error',
        message: 'Number not found'
      })
    }

    return res.json({
      status: 'success',
      message: `Data for Number - ${number}`,
      logs: combinedData.filter((log) => log.number === number)
    })
  } catch (err) {
    return res.json({ status: 'error', message: err })
  }
}

module.exports = { getCombinedData, getSingleAgent, getCallsData }
