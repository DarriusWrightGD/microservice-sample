console.log("Starting the service")
const app = require('express')()
const cors = require('cors')

app.use(cors())

app.use('/health', (req, res) => {
  res.send({
    status: "ok",
    service: "sample-service"
  })
})

app.get('/sample/:id', (req, res) => {
  res.send({
    id: req.params.id,
    description: "Chick-fila Sample",
    free: false
  })
})

app.listen(3000)