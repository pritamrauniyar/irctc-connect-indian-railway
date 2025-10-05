const axios = require('axios');

const PNR_API_1_HOST = 'irctc-indian-railway-pnr-status.p.rapidapi.com';
const PNR_API_1_BASE_URL = 'https://irctc-indian-railway-pnr-status.p.rapidapi.com';

const PNR_API_2_HOST = 'irctc-api2.p.rapidapi.com';
const PNR_API_2_BASE_URL = 'https://irctc-api2.p.rapidapi.com';

async function getPNRStatus1(pnr, apiKey) {
  const url = `${PNR_API_1_BASE_URL}/getPNRStatus/${pnr}`;
  const headers = {
    'x-rapidapi-host': PNR_API_1_HOST,
    'x-rapidapi-key': apiKey,
  };
  const response = await axios.get(url, { headers });
  return response.data;
}

async function getPNRStatus2(pnr, apiKey) {
  const url = `${PNR_API_2_BASE_URL}/pnrStatus?pnr=${pnr}`;
  const headers = {
    'x-rapidapi-host': PNR_API_2_HOST,
    'x-rapidapi-key': apiKey,
  };
  const response = await axios.get(url, { headers });
  return response.data;
}

async function getLiveStationStatus(source, destination, hours, apiKey) {
  const url = `${PNR_API_2_BASE_URL}/liveStation?source=${source}&destination=${destination}&hours=${hours}`;
  const headers = {
    'x-rapidapi-host': PNR_API_2_HOST,
    'x-rapidapi-key': apiKey,
  };
  const response = await axios.get(url, { headers });
  return response.data;
}

async function getLiveTrainStatus(trainNumber, startDay, apiKey) {
  const url = `${PNR_API_2_BASE_URL}/liveTrain?trainNumber=${trainNumber}&startDay=${startDay}`;
  const headers = {
    'x-rapidapi-host': PNR_API_2_HOST,
    'x-rapidapi-key': apiKey,
  };
  const response = await axios.get(url, { headers });
  return response.data;
}

async function getTrainSchedule(trainNumber, apiKey) {
  const url = `${PNR_API_2_BASE_URL}/trainSchedule?trainNumber=${trainNumber}`;
  const headers = {
    'x-rapidapi-host': PNR_API_2_HOST,
    'x-rapidapi-key': apiKey,
  };
  const response = await axios.get(url, { headers });
  return response.data;
}

async function getTrainAvailability(source, destination, date, apiKey) {
  const url = `${PNR_API_2_BASE_URL}/trainAvailability?source=${source}&destination=${destination}&date=${date}`;
  const headers = {
    'x-rapidapi-host': PNR_API_2_HOST,
    'x-rapidapi-key': apiKey,
  };
  const response = await axios.get(url, { headers });
  return response.data;
}

async function getTrainName(trainNumber, apiKey) {
  const url = `${PNR_API_2_BASE_URL}/trainSearch?trainNumber=${trainNumber}`;
  const headers = {
    'x-rapidapi-host': PNR_API_2_HOST,
    'x-rapidapi-key': apiKey,
  };
  const response = await axios.get(url, { headers });
  return response.data;
}

async function getStationName(code, apiKey) {
  const url = `${PNR_API_2_BASE_URL}/stationSearch?code=${code}`;
  const headers = {
    'x-rapidapi-host': PNR_API_2_HOST,
    'x-rapidapi-key': apiKey,
  };
  const response = await axios.get(url, { headers });
  return response.data;
}

module.exports = {
  getPNRStatus1,
  getPNRStatus2,
  getLiveStationStatus,
  getLiveTrainStatus,
  getTrainSchedule,
  getTrainAvailability,
  getTrainName,
  getStationName,
};
