const Http = require('http')
const Url = require('url')
const App = require('./app/App')

const port = process.env.PORT || 3100

const server = Http.createServer((req, res) => {
	const { url, method } = req
	const { pathname, query } = Url.parse(url, true)

	let body = []

	req.on('error', err => {
		throw new Error(err)
	}).on('data', chunk => {
		body = [...body, chunk]
	}).on('end', () => {
		body = Buffer.concat(body).toString()
		const content = {
			body,
			method,
			pathname,
			query
		}

		new App(res, content)
	})
})

server.listen(port, () => console.log(`Server on... Port: ${port}`))