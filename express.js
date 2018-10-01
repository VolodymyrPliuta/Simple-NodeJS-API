const app = require('express')()
const port = 8900

app.get('/', (req, res) => res.json('Ready?'))
app.get('/go', (req, res) => res.json('Go!'))
app.get('/NY', (req, res) => res.json('Go! to NY'))
app.get('/Atlanta', (req, res) => res.json('Go! to Atlanta'))

app.listen(port)
