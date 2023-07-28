const express = require('express')
const app = express()
const port = 3001 // <- 3000에서 다른 숫자로 변경

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})