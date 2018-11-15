const app = require('express')()
const cors = require('cors')

app.use(cors())

app.use('/health', (req, res) => {
  res.send({
    status: "ok",
    service: "todo-service"
  })
})

app.get('/todo/:id', (req, res) => {
  res.send({
    id: req.params.id,
    description: "Take out the trash",
    done: false
  })
})

app.listen(3000)