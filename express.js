const app = require('express')()
const PORT = process.env.PORT

app.get('/', (req, res) => res.json('Ready?'))
app.get('/go', (req, res) => res.json('Go!'))
app.get('/NY', (req, res) => res.json('Go! to NY'))
app.get('/Atlanta', (req, res) => res.json('Go! to Atlanta'))

app.listen(PORT)
