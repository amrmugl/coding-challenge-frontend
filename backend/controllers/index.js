//importing files from json-data folder
const agents = require('../../json-data/agents.json')
const logs = require('../../json-data/logs.json')
const resol = require('../../json-data/resolution.json')

//combining all data to show on dashboard
const combinedLogs = logs.map((log) => ({
  ...resol.find((resol) => resol.identifier === log.identifier),
  ...agents.find((agent) => agent.identifier === log.agentIdentifier),
  ...log
}))

// function for getting all the combined data
async function getCombinedData(req, res) {
  try {
    return res.json({
      status: 'success',
      message: 'Dashboard data',
      data: combinedLogs
    })
  } catch (err) {
    return res.json({ status: 'error', message: err })
  }
}

//exporting modules
module.exports = { getCombinedData }