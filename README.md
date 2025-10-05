# Indian Railway API NPM Package

This npm package provides functions to access Indian Railway data such as PNR status, live train status, train schedule, seat availability, and more using RapidAPI.

## Installation

```bash
npm install irctc-connect-indian-railway
```

## Usage

You need to get an API key from RapidAPI for the Indian Railway APIs. Pass the `x-rapidapi-key` as a parameter to each function.

```javascript
const railwayAPI = require('install irctc-connect-indian-railway');

const apiKey = 'YOUR_RAPIDAPI_KEY';

// Get PNR status (option 1)
railwayAPI.getPNRStatus1('4844851755', apiKey)
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Get PNR status (option 2)
railwayAPI.getPNRStatus2('6351738552', apiKey)
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Get live station status
railwayAPI.getLiveStationStatus('NDLS', 'GKP', 8, apiKey)
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Get live train status
railwayAPI.getLiveTrainStatus('12321', 1, apiKey)
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Get train schedule
railwayAPI.getTrainSchedule('12321', apiKey)
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Get train availability
railwayAPI.getTrainAvailability('NDLS', 'GKP', '13-06-2025', apiKey)
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Get train name
railwayAPI.getTrainName('12321', apiKey)
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Get station name
railwayAPI.getStationName('NDLS', apiKey)
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

## How to Use

1. Sign up on RapidAPI and subscribe to the following APIs:
   - [IRCTC API2](https://rapidapi.com/prayansil11/api/irctc-api2) (Basic plan subscription is free; paid plans offer more requests)
   - [IRCTC Indian Railway PNR Status](https://rapidapi.com/amiteshgupta/api/irctc-indian-railway-pnr-status) (Basic plan subscription is free; paid plans offer more requests)

2. Obtain your `x-rapidapi-key` from your RapidAPI dashboard.

3. Pass the API key as the second argument to any function you call from this package.

4. Use either of the two PNR status functions as per your preference or fallback needs.

5. Handle the returned promises to get the data or catch errors.

## Notes

- You must provide your own RapidAPI key (`x-rapidapi-key`) as these APIs have limited free requests per month.
- The package supports two different PNR status APIs; you can use either as a primary or fallback option.
- This package does not support booking features.
- For detailed API response structure, refer to the respective RapidAPI documentation.

## License

MIT
