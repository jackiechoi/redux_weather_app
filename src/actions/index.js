import axios from 'axios';
//Axios is a js library that acts like jQuery, makes ajax requests and returns promise

const API_KEY = '588c140c1c254b0e21bf776108fb88a5';
//url for ajax get request
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

//actionCreator called fetchWeather returns an object/Action, with a type.
//it takes city, a string, and uses it as part of the search Query (as shown in const url)
export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	//axios makes the ajax request in the form of get, with the url supplied, and returns a promise. Then the promise is passed in payload property of the action.
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}