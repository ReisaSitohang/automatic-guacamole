const express = require ('express')
const app = express()

console.log('starting app')

app.use( express.static('static') )

app.listen(3000, () => {
	console.log ('Express listening')
} )