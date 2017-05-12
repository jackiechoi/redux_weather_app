import axios from 'axios';
//axios library that acts like ajax and returns promise

const API_KEY = '588c140c1c254b0e21bf776108fb88a5';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);


	return {
		type: FETCH_WEATHER;
		payload: request
	};
}