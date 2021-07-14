const express = require('express')

const app = express()

const listener = app.listen(process.env.PORT || 8080, () => {
  console.log('App is listening on port ' + listener.address().port)
})