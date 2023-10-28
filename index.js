// create a router session, login to router, fetch attached devices
const express = require('express');
const cors = require('cors');
const getDevices = require('./getConnectedDevices');

const app = express();
app.use(cors());
const port = 8000;

app.get('/', async (req, res) => {
	res.send(await getDevices());
});

app.listen(port, () => {
	console.log(`API listening on port ${port}`)
});
