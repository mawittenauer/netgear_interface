# Netgear Client
This is a simple web interface for seeing what devices are connected to your netgear router.

## Installation
To install clone this repository to the machine where you want to run the web interface and run the following commands

```
cd netgear-interface/
touch .env
touch addresses.js
npm install

cd client/
touch .env
npm install
```

## Configuration
.env
```
ROUTER_PASSWORD='YOUR ROUTER PASSWORD'
```

addresses.js
```
const addresses = {
    'MAC ADDRESS': 'NAME OF TRACKED DEVICE,
    'MAC ADDRESS TWO': 'NAME OF SECOND TRACKED DEVICE'
}

module.exports = addresses;
```
client/.env
```
REACT_APP_API_URL=http://localhost:8000/
```

## Run

```
cd netgear-interface/
npm run start
```
