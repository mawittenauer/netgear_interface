require('dotenv').config();
const Netgear = require('netgear');

const addresses = require('./addresses');
router = new Netgear();

module.exports = async function getDevices() {
	try {
		const options = { password: process.env.ROUTER_PASSWORD };
		await router.login(options);
		const deviceArray = await router.getDeviceListAll();
		const connectedDevices = deviceArray.map(d => ({ mac: d.MAC, name: addresses[d.MAC], connected: true }));
		const connectedDevicesMacs = connectedDevices.map(d => d.mac);
		const trackedDevicesMacs = Object.keys(addresses);
		const disconnectedDevicesMacs = trackedDevicesMacs.filter(m => !connectedDevicesMacs.includes(m));
		const disconnectedDevices = disconnectedDevicesMacs.map(m => ({ mac: m, name: addresses[m], connected: false }));
        const allDevices = [...connectedDevices, ...disconnectedDevices];
		return allDevices;
	} catch (error) {
		console.log(error);
	}
}
