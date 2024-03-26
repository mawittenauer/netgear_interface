# Netgear Client
This is a simple web interface for seeing what devices are connected to your netgear router.

## Installation
To install clone this repository to the machine where you want to run the web interface and run the following commands:

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
Enter the following variables into the .env file:
```
ROUTER_PASSWORD='YOUR ROUTER PASSWORD'
```

Copy the following object in the addresses.js and add the MAC addresses you know:
```
const addresses = {
    'MAC ADDRESS': 'NAME OF TRACKED DEVICE,
    'MAC ADDRESS TWO': 'NAME OF SECOND TRACKED DEVICE'
}

module.exports = addresses;
```

Enter the following variables into the client/.env file:
```
REACT_APP_API_URL=http://localhost:8000/
```

## Run

```
cd netgear-interface/
npm run start
```
