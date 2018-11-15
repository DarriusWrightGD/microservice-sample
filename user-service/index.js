const app = require('express')()
const cors = require('cors')

app.use(cors())

app.use('/health', (req, res) => {
  res.send({
    status: "ok",
    service: "user-service"
  })
})

app.get('/user/:id', (req, res) => {
  res.send({
    id: req.params.id,
    username: "darrius.wright@gmail.com",
    firstName: "Darrius",
    lastName:  "Wright"
  })
})

app.listen(3000)