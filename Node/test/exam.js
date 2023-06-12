const express = require('express');
const http = require('http');
const router = require('./router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.post('/form', (req, res, next) => {
	if(req.body.abc !== "1234") {
		req.body.result = -1;
	}

	const result = {
		num1: req.body.num1,
		num2: req.body.num2,
		result: req.body.result,
	}

	res.json(result);
});


app.use('/', router);
app.use(express.static(__dirname));

const port = 8080;

const server = http.createServer(app);
server.listen(port);
