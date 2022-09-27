const express = require('express')
const app = express();
const router = require('./routes/generator')

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'))
app.use('/', router)

app.listen(8080, () => {
    console.log('Server listening to port 8080')
})